import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../redux/users/usersActions";

export default function Users() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  console.log(state);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <p>User List</p>;
}
