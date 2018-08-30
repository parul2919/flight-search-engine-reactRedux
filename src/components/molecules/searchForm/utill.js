import { flights } from './../../../api/data';


export const filterOneWayFlights = (filter, type) => {
  return flights.filter((flight) => {
    const sameDepartureDate = flight.departureDate === filter.departureDate;
    const sameOrigin = flight.origin === filter.origin;
    const sameDestination = flight.destination === filter.destination;
    const sameType = flight.type === type;
    const fare = flight.fare <= filter.fare;
    return sameDepartureDate && sameOrigin && sameDestination && sameType && fare;
  });
};

export const filterReturnFlights = (filter, type) => {
  return flights.filter((flight) => {
    const sameDepartureDate = flight.departureDate === filter.departureDate;
    const sameReturnDate = flight.returnDate === filter.returnDate;
    const sameOrigin = flight.origin === filter.origin;
    const sameDestination = flight.destination === filter.destination;
    const sameType = flight.type === type;
    const sameRouteOneFare = (flight.route_one_fare + flight.route_two_fare) <= filter.fare;
    return sameDepartureDate
    && sameReturnDate
    && sameOrigin
    && sameDestination
    && sameType
    && sameRouteOneFare;
  });
};

