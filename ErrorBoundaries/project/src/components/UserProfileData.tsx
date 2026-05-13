type props = {
    name:string,
    email:string,
    phone:string,
    address:string
}

const UserProfileData = ({ userData }: { userData: props }) => {
  return (
    <div style={{ border: '1px solid #000', padding: '20px' }}>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>Address: {userData.address}</p>
    </div>
  )
  
}

export default UserProfileData