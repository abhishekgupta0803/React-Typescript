import { useCustomHook } from "../hook/useCustomHook";
import { Link,  } from "react-router-dom";
import "../css/style.css"

const ListEmployee = () => {
  const { employee, deleteEmp } = useCustomHook();
  
  return (
    <div className="list-emp">
      <button>
        <Link to={"/"}>DashBoard </Link>
      </button>

      <table border={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DEPARTEMENTS</th>
            <th>POSITION</th>
            <th>SALARY</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {employee.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.departments}</td>
              <td>{e.position}</td>
              <td>{e.salary}</td>
              <td>{e.status ? "Active" : "Leave"}</td>

              <td>
                <button onClick={() => deleteEmp(e.id)}>Delete</button>
                <Link to={`/edit/${e.id}`}>
                  <button>edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
