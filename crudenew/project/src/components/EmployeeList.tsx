import type { Employee } from "./Employee.type";
import "./employeelist.stylr.css";
type props = {
  list: Employee[];
};

const EmployeeList = (props: props) => {
  const { list } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((data) => (
          <tr key={data.id}>
            <td>
              {data.first} {data.last}
            </td>
            <td>{data.email}</td>
            <td>
              <div>
                <input type="button" value="View" />
                <input type="button" value="Edit" />
                <input type="button" value="Delete" />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default EmployeeList;
