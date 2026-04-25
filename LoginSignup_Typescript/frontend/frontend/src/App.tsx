import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
function App() {
  

  return (
    <>
      <Routes>
      <Route path="*" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard"  element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }/>
    </Routes>
    </>
  )
}

export default App
