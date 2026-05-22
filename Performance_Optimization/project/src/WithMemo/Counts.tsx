import React, { useRef  } from "react";

const Counts = () => {
  const renderRef = useRef<number>(0);

  const renderCount = ++renderRef.current;
  console.log(renderCount);

  return (
    <div>
      <h1>Render Count: {renderCount}</h1>
    </div>
  );
};

export default React.memo(Counts);