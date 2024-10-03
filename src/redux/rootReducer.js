import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";
import usersReducer from "./users/usersReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  users: usersReducer,
});
