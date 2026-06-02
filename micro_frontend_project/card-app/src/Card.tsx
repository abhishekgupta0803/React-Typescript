

const Card = () => {
  const users = [
    { id: 1, name: "Abhishek", role: "Frontend Developer" },
    { id: 2, name: "Rahul", role: "Backend Developer" },
  ];

  return (
    <>
      <h2>User Cards</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </>
  );
}

export default Card

