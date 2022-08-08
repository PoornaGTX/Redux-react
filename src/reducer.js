import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

//reducer
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        //cartItem is current item and reduce is inbuilt method
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
        //this values are the return value and we have to inialize the default value
      }
    );
    total = parseFloat(total.toFixed(2)); //toFixed() is used to get the total with 2 decimal points and parseFloat() is used to convert String to Float
    return { ...state, total, amount };
  }

  return state; // if not matching any action reducer will return old state that before update
}

export default reducer;
