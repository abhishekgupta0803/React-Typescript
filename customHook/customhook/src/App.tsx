
import CounterCountn from "./components/CounterCountn";

function App() {
   const {Increment , Decrement ,count , Reset} = CounterCountn(20);



  return (
    <>
      <p>{count}</p>

      <div>
         <button onClick={Increment}>+</button>
      </div>

     <div>
      <button onClick={Decrement}>-</button>
     </div>
      
     <div>
       <button onClick={Reset}>Reset</button>
     </div>
      
    </>
  )
}

export default App
