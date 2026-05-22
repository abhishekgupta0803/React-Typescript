import { useUsers } from "./useUser";

const UserList = () => {
  const { users, loading, error, refetch } = useUsers();

  if (loading) return <h2>Loading users...</h2>;

  if (error)
    return (
      <div>
        <h2 style={{ color: "red" }}>{error}</h2>
        <button onClick={refetch}>Retry</button>
      </div>
    );

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;