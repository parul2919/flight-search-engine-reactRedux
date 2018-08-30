import {
  ADD_FLIGHT_TO_CART_ONE_WAY,
  ADD_FLIGHT_TO_CART_TWO_WAY
} from "./../actions/index";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_FLIGHT_TO_CART_ONE_WAY:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ADD_FLIGHT_TO_CART_TWO_WAY:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    default:
      return state;
  }
}
