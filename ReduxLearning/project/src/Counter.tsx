import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState<number>(0);
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        {" "}
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(incrementAmount(num));
        }}
      >
        IncrementAmount
      </button>
    </div>
  );
};

export default Counter;
