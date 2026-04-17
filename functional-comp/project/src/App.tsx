import { useState } from "react"
import CalcButton from "./components/CalcButton"
import type { operations } from "./types"
import { ButtonDemo } from "./resuableBtn/ButtonDemo";
import ApiFetch from "./api_get_call/ApiFetch";

function App() {

  const [value , setValue] = useState<number>(0);
  
  const OperationHandel =  (operations : operations) =>{

    if(operations === "Add") {
      setValue(10 + 5);
    }

    if(operations === "sub") {
      setValue(10 - 5);
    }

    if(operations === "Divide") {
      setValue(10 / 5);
    }

  }
  return (
    <>
      <CalcButton label="Add"  onClick={()=> OperationHandel("Add")}/>
      <CalcButton label="Sub"  onClick={()=> OperationHandel("sub")}/>
      <CalcButton label="Divide"  onClick={()=> OperationHandel("Divide")}/>
      <h1>Output :{value}</h1>

      <ButtonDemo label="Resuable-Btn"  onClick={()=>alert("Button is working")}/>
      <ApiFetch />
    </>
  )
}

export default App
