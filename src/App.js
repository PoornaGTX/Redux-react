import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store - stores data, think of state
//reducer - function that used to update data(store)
//reducer - state , action
//state - old state / state before update
//return updated or old state

//dispatch - send actions to the store
//Don't MUTATE THE STATE - redux built on IMMUTABILITY

import { createStore } from "redux";

//initial store
const initialStore = {
  count: 0,
  name: "john",
};

//reducer
function reducer(state, action) {
  console.log({ state, action });

  if (action.type === "DECREASE") {
    //create a copy of state
    return { ...state, count: state.count - 1, name: "DImal" }; //state.count=state.count-1 <=== we cant do like that because we cant MUTATE THE STATE  ;
  }

  if (action.type === "INCREASE") {
    //create a copy of state
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "RESET") {
    //create a copy of state
    return { ...state, count: 0 };
  }

  if (action.type === "CHANGE_NAME") {
    //create a copy of state
    return { ...state, name: "Poorna" };
  }

  return state; // if not matching any action reducer will return old state that before update
}

//reducx store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "CHANGE_NAME" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });

console.log(store.getState()); //store.getState() invoke the initialStore/state

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
