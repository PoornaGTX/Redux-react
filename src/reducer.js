import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

//reducer
function reducer(state, action) {
  console.log({ state, action });

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    console.log("DECREASE amount");
  }

  if (action.type === INCREASE) {
    console.log("INCREASE amount");
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  return state; // if not matching any action reducer will return old state that before update
}

export default reducer;
