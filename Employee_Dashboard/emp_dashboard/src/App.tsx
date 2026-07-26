import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ADDEmp from "./components/ADDEmp";
import ListEmployee from "./components/ListEmployee";
import EmpUpdate from "./components/EmpUpdate";

const App = () => {

    return(
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/newemp" element={<ADDEmp />} />
        <Route path="/EmpLists" element={<ListEmployee />} />
        <Route path="/edit/:id" element={<EmpUpdate />} />
    </Routes>
);
};

export default App;
