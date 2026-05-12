import React, { useEffect, useState } from "react";
import { exportToExcel } from "../utils/exportToExcel";
import { fetchUsers, type User } from "./userService";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);

      const data = await fetchUsers();

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleExport = () => {
    const formattedData = users.map((user) => ({
      ID: user.id,
      Name: user.name,
      Email: user.email,
      Phone: user.phone,
    }));

    exportToExcel(formattedData, "Users");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <button onClick={handleExport}>
        Export Excel
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          border={1}
          cellPadding={10}
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;