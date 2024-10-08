import { applyMiddleware, createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// single state
// const store = createStore(cakeReducer);

// multiple state => add root reducer and combine reducers
// const store = createStore(rootReducer);

// add redux thunk to handle async actions
// const store = createStore(rootReducer, applyMiddleware(thunk));

// use redux devtool => add package => add extension in chrome
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
