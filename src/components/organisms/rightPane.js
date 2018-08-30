import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import FlightHeader from "./../molecules/flightHead/flightHead";
import FlightCard from "./../molecules/flightCard/flightCard";


class RightPane extends Component {


  render() {
    const { activeTab, isSearched, departureDate, returnDate, searchResults } = this.props;
    const flight = this.props.searchResults[0];
    const results = this.props.searchResults.length;
    return (
      <Fragment>
        <FlightHeader
            activeTab={activeTab}
            isSearched={isSearched}
            flight={flight}
            results={results}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        <FlightCard 
            activeTab={activeTab}
            isSearched={isSearched}
            flight={flight}
            results={results}
            departureDate={departureDate}
            returnDate={returnDate}
            searchResults = {searchResults}
        />
      </Fragment>
        
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.flights.searchResults,
  activeTab: state.flights.activeTab,
  isSearched: state.flights.isSearched,
  departureDate: state.flights.departureDate,
  returnDate: state.flights.returnDate
});


export default connect(mapStateToProps)(RightPane);

