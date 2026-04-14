import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount ] = useState<number>(0);
  return (
    <>
    <div>Counter : {count}</div>
    <div><button onClick={()=>{setCount(count + 1)}}>Click Me</button></div>
    </>
  )
}

export default Counter