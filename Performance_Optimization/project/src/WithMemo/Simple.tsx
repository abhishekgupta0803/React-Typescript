import { useState } from "react"
import Counts from "./Counts"


const Simple = () => {
    const [count , setCount] = useState<number>(0)
  return (
    <div>
        <h1>Counts{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Counts />
    </div>
  )
}

export default Simple