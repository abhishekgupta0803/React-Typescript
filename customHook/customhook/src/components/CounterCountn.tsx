import { useState } from "react";

const CounterCountn = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const Increment = () => setCount((prev) => prev + 1);
  const Decrement = () => setCount((prev) => prev - 1);
  const Reset = () => setCount(initialValue);

  return {Increment , Decrement , Reset , count};
};

export default CounterCountn;
