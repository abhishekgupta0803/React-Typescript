type props = {
    name:string,
    email:string,
    phone:string,
    address:string
}

const Profile2 = ({ userData }: { userData: props }) => {
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
    </div>
  )
  
}

export default Profile2