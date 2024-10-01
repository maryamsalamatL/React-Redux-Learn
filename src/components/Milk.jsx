import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../redux/milk/milkActions";

export default function Milk() {
  const state = useSelector((state) => state.milk);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Number of Milk : {state.numOfMilk}</p>
      <button onClick={() => dispatch(buyMilk(1))}>buy 1 milk</button>
      <button onClick={() => dispatch(buyMilk(2))}>buy 2 milk</button>
    </div>
  );
}
