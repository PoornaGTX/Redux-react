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

//redux

import { createStore } from "redux";
import reducer from "./reducer";

//react-redux -Provide wrap the application , connect - used in components

import { Provider } from "react-redux";

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5,
};

//redux store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
