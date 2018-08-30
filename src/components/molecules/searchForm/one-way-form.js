import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { airports } from './../../../api/data';
import { filterOneWaySearchResults } from './../../../actions/index';
import Input from './../../atoms/input';
import {autocompleteStyles} from './form.style';

class OneWayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      departureDate: '',
      numberOfPassengers: 1,
      fare: 20000
    };

    this.destinations = [];
  }

  setDepartureDate = (e) => {
    this.setState({
      departureDate: moment(e.target.value).format('DD MM YYYY')
    });
  }

  handleOriginSelect = (origin) => {
    this.setState({ origin });
    this.destinations = airports.filter(item => item.name !== origin);
  }

  handleDestinationSelect = (destination) => {
    this.setState({ destination });
  }

  handleSliderChange = (e) => {
    this.setState({ fare: parseInt(e.target.value, 0) });
  }

  handlePassengerChange = (e) => {
    this.setState({ numberOfPassengers: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.origin === this.state.destination) {
      this.setState({ origin: '', destination: '' });
      return;
    }
    const {
      origin,
      destination,
      departureDate,
      numberOfPassengers,
      fare
    } = this.state;

    this.props.filterOneWaySearchResults({
      origin,
      destination,
      departureDate,
      numberOfPassengers,
      fare
    });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-2">
            <Autocomplete
              autoHighlight
              value={this.state.origin}
              items={airports}
              onChange={(event, value) => this.setState({ origin: value })}
              onSelect={this.handleOriginSelect}
              renderItem={(item, isHighlighted) => (
                <div
                  style={isHighlighted ? autocompleteStyles.highlightedItem : autocompleteStyles.item}
                  key={item.name}
                >{item.name}
                </div>
                )}
              getItemValue={item => item.name}

              inputProps={{ placeholder: 'Enter your origin', required: true, className:'form-control' }}
            />
          </div>
            
          <div className="form-group">
            <Autocomplete
              autoHighlight
              value={this.state.destination}
              items={this.destinations}
              onChange={(event, value) => this.setState({ destination: value })}
              onSelect={this.handleDestinationSelect}
              renderItem={(item, isHighlighted) => (
                <div
                  style={isHighlighted ? autocompleteStyles.highlightedItem : autocompleteStyles.item}
                  key={item.name}
                >{item.name}
                </div>
                )}
              getItemValue={item => item.name}
              inputProps={{ placeholder: 'Enter your destination', required: true, className:'form-control' }}
            />
          </div>
   
            <Input 
              className="form-group mt-3"
              inputClass="form-control"
              id="departureDate"
              labelContent="Choose your departure date"
              showLabel="true" 
              type="date" 
              placeholder="Choose departure date"
              onChange={this.setDepartureDate}
              min={moment().format('YYYY-MM-DD')}
              required
            />
              
          <Input 
              className="form-group mt-3"
              inputClass="form-control"
              id="numberOfPassengers"
              labelContent="Enter number of passengers"
              showLabel="true" 
              type="number" 
              placeholder="Number of pax"
              onChange={this.handlePassengerChange}
              value={this.state.numberOfPassengers}
              min="0"
              required
            />

          
              
            <Input 
              className="form-group mt-3 "
              inputClass="form-control-range"
              id="fare"
              labelContent={`Choose price range (Max: ${this.state.fare})`}
              showLabel="true" 
              type="range" 
              onChange={this.handleSliderChange}
              value={this.state.fare}
              min={5000}
              max={20000}
              step={500}
            />

          <div className="form-group ">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>

        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { filterOneWaySearchResults }
)(OneWayForm);



