import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

export default function Cake() {
  // useSelector takes a parameter called selector function
  // useSelector return what ever returned by selector function
  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Number of Cake : {state.numOfCake}</p>
      {/* dispatch an action(actions are always object) */}
      <button onClick={() => dispatch(buyCake(1))}>buy 1 cake</button>
      <button onClick={() => dispatch(buyCake(2))}>buy 2 cake</button>
    </div>
  );
}

// without hooks (CC) => mapStateToProps, mapDispatchToProps => bad practice
