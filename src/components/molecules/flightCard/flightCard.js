import React, { Component } from "react";
import type { Node } from "react";
import { connect } from "react-redux";
import OneWayFlightDetail from "./../flightDetails/one_way_flight_detail";
import ReturnFlightDetail from "./../flightDetails/return_flight_detail";

type Props = {
  activeTab: string,
  searchResults: number,
  returnDate: string,
  departureDate: string,
  flight: object,
  results: number,
  isSearched: boolean
};

class FlightCard extends Component<Props> {
  static defaultProps = {
    activeTab: "one-way",
    searchResults: 5,
    returnDate: "",
    departureDate: "",
    flight: {},
    results: 4,
    isSearched: false
  };

  componentWillMount() {}

  renderFlightList = () => {
    const { activeTab, searchResults } = this.props;

    return searchResults.map(flight => {
      if (flight.type === activeTab) {
        if (flight.type === "one-way") {
          return (
            <OneWayFlightDetail
              id={flight.id}
              origin={flight.origin}
              destination={flight.destination}
              flightCode={flight.flight_code}
              duration={flight.duration}
              arrival={flight.arrivalTime}
              fare={flight.fare}
              key={flight.id}
              type={flight.type}
            />
          );
        } else {
          // eslint-disable-line
          return <ReturnFlightDetail flight={flight} key={flight.id} />;
        }
      }
    });
  };

  render(): Node {
    return (
      <div className="flight-list-container">{this.renderFlightList()}</div>
    );
  }
}

export default FlightCard;
