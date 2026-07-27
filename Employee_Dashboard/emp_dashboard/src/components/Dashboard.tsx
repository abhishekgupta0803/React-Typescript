import { useCustomHook } from "../hook/useCustomHook";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
const Dashboard = () => {
  const { dashboard } = useCustomHook();
  const navigate = useNavigate();

  const AddEmpHandel = () => {
    navigate("/newemp");
  };

  const ListEmpHandel = () => {
    navigate("/EmpLists");
  };

  return (
    <div className="dashboard">
      <div className="dash-container">
        <button onClick={AddEmpHandel}>ADD EMP</button>
        <button onClick={ListEmpHandel}>List EMPLOYEES</button>
        <table border={5}>
          <thead>
            <h5>EMPLOYEES DASHBOARD</h5>
            <tr>
              <th>Total Emp</th>
              <th>Total Department</th>
              <th>Total Salary</th>
              <th>Active</th>
              <th>Leave</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{dashboard.totalEmp}</td>
              <td>{dashboard.totalDep}</td>
              <td>{dashboard.totalSal}</td>
              <td>{dashboard.active}</td>
              <td>{dashboard.leave}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
