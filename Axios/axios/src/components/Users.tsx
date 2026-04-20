import { useEffect, useState } from "react";
import api from "./api";

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api
      .get<User[]>("/posts")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>Users</div>
      {users.map((users) => (
        <p>
          users {users.id} {users.name}
        </p>
      ))}
    </>
  );
};

export default Users;
