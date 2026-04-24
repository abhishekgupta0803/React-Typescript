import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Routes>
      <Route path="*" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
