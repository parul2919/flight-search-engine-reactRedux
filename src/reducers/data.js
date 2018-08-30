import {
  SET_TAB,
  FILTER_ONE_WAY_RESULTS,
  FILTER_RETURN_RESULTS
} from './../actions/index';

import {
  filterOneWayFlights,
  filterReturnFlights
} from './../components/molecules/searchForm/utill';

import { flights } from './../api/data';

const initialState = {
  searchResults: flights,
  activeTab: 'one-way',
  isSearched: false
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_TAB:
    return {
      ...state,
      activeTab: action.activeTab,
      searchResults: state.isSearched === false ? state.searchResults : []
    };

  case FILTER_ONE_WAY_RESULTS:
    return {
      ...state,
      searchResults: filterOneWayFlights(action.payload, state.activeTab),
      isSearched: true,
      departureDate: action.payload.departureDate
    };

  case FILTER_RETURN_RESULTS:
    return {
      ...state,
      searchResults: filterReturnFlights(action.payload, state.activeTab),
      isSearched: true,
      departureDate: action.payload.departureDate,
      returnDate: action.payload.returnDate
    };

  default:
    return state;
  }
}
