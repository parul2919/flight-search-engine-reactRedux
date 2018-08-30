export const FILTER_ONE_WAY_RESULTS = "FILTER_ONE_WAY_RESULTS";
export const FILTER_RETURN_RESULTS = "FILTER_RETURN_RESULTS";
export const SET_TAB = "SET_TAB";
export const ADD_FLIGHT_TO_CART_ONE_WAY = "ADD_FLIGHT_TO_CART_ONE_WAY";
export const ADD_FLIGHT_TO_CART_TWO_WAY = "ADD_FLIGHT_TO_CART_TWO_WAY";

export const setTab = activeTab => ({
  type: SET_TAB,
  activeTab
});

export const filterOneWaySearchResults = payload => ({
  type: FILTER_ONE_WAY_RESULTS,
  payload
});

export const filterReturnSearchResults = payload => ({
  type: FILTER_RETURN_RESULTS,
  payload
});

export const addFlightToCartOneWay = payload => ({
  type: ADD_FLIGHT_TO_CART_ONE_WAY,
  payload
});

export const addFlightToCartTwoWay = payload => ({
  type: ADD_FLIGHT_TO_CART_TWO_WAY,
  payload
});
