import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCake: 10,
};

// in redux projects always pass default value to state
// default case => return state (!not throwing error)
// *return new state. never mutate state
export default function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - action.payload };

    default:
      return state;
  }
}
