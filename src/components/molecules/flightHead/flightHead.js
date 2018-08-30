import React from 'react';
import type { Node } from 'react';
import moment from 'moment';

type Props = {
  isSearched: boolean,
  activeTab: string,
  flight:object,
  results:number,
  departureDate: string,
  returnDate: string,
};

const FlightHeader = ({
  activeTab,
  isSearched,
  flight,
  results,
  departureDate,
  returnDate,
}: Props): Node => {
  let departureDisplay;
  let returnDisplay;
  if (departureDate) {
    departureDisplay = moment(departureDate, 'DD MM YYYY').format('MMM Do YYYY');
  }
  if (returnDate) {
    returnDisplay = moment(returnDate, 'DD MM YYYY').format('MMM Do YYYY');
  }
  const plural = results === 1 ? 'flight' : 'flights';
    
  if (!isSearched) {
    return (
      <div className="row col-sm-12 border m-0 mb-3 p-3 ">
        <h3 className="listing_title">Showing all results for {activeTab} flights!</h3>
      </div>
    );
  } else {
    if (flight) {
      if (activeTab === 'one-way') {
        return (
          <div className="row col-sm-12 border m-0 mb-3 p-3 ">
            <div className="col-sm-8">
                <h3 className="h3">{flight.origin} &#8594; {flight.destination}</h3>
                <span className="block">{results} {plural} found</span>
            </div>
            <div className="col-sm-4">Depart date: {departureDisplay}</div>
          </div>
        );
      } else {
        return (
          <div className="row col-sm-12 border m-0 mb-3 p-3 ">
            <div className="col-sm-8">
              <h3 className="h3">{flight.origin}  &#8594; {flight.destination} &#8594; {flight.origin}</h3>
              <span className="block">{results} {plural} found</span>
            </div>
            <div className="col-sm-4">
                <p>Depart date: {departureDisplay}</p>
                <p>Return date: {returnDisplay}</p>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="row col-sm-12 border m-0 mb-3 p-3 ">
          <h3 className="listing_title">No search results to display for your search!</h3>
        </div>
      );
    }
  }
};



export default FlightHeader;
