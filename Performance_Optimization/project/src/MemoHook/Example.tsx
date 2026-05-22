import { useMemo, useState } from "react";

const Example = () => {
  const [count, setCount] = useState<number>(0);
  const [countTwo, setCountTwo] = useState<number>(0);

  const EvenOdd = useMemo(() => {
    let i = 1;
    while (i < 2000000000) {
      i++;
    }
    return count % 2 === 0 ? "Even" : "Odd";
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count One {count}</button>
      <span>{EvenOdd}</span>
      <button onClick={() => setCountTwo(countTwo + 1)}>
        Count Two {countTwo}
      </button>
    </div>
  );
};

export default Example;
