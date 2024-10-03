/**
 * an action creator witch return a function
 */

import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./usersTypes";

// another way for sub actions (both are completely ok)
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// main action
export default function fetchUsers() {
  return (dispatch) => {
    // sub action
    // dispatch({ type: FETCH_USERS_REQUEST });
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) =>
        // sub action
        // dispatch({ type: FETCH_USERS_SUCCESS, payload: data })
        dispatch(fetchUsersSuccess(data))
      )
      .catch((err) =>
        // sub action
        // dispatch({ type: FETCH_USERS_FAILURE, payload: err.message })
        dispatch(fetchUsersFailure(err.message))
      );
  };
}
