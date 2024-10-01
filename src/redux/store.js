import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { rootReducer } from "./rootReducer";

// single state
// const store = createStore(cakeReducer);

// multiple state => add root reducer and combine reducers
const store = createStore(rootReducer);

export default store;
