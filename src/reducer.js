import { DECREASE, INCREASE } from "./actions";

//reducer
function reducer(state, action) {
  console.log({ state, action });

  return state; // if not matching any action reducer will return old state that before update
}

export default reducer;
