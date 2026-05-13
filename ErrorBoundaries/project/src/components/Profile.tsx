
import UserProfileData from './UserProfileData';

const userData = {
    name:"john",
    email:"guptaabhishek0803@gmail.com",
    phone:"1234567890",
    address:"123, Main Street, City, Country"
}

const Profile = () => {
  return (
    <>
        <UserProfileData  userData={userData} />
        
    </>
  )
}

export default Profile