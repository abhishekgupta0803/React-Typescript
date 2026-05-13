
import ErrorBoundary from './ErrorBoundary';
import UserProfileData from './UserProfileData';

const userData = {
    name:"john",
    email:"guptaabhishek0803@gmail.com",
    phone:"1234567890",
    address:"123, Main Street, City, Country"
}
 
  const userData3= {
    name:"john",
    email:"guptaabhishek0803@gmail.com",
    phone:"1234567890",
    address:"123, Main Street, City, Country"
} // Simulating an error by passing undefined data

const userData1 = undefined as any;

const Profile = () => {
  return (
    <>
    {/* <ErrorBoundary> */}
       <UserProfileData  userData={userData} />
    {/* </ErrorBoundary > */}
    
    {/* //send error using props */}
     {/* <ErrorBoundary fallback={<p>Error in User Profile</p>}> */}
      <UserProfileData  userData={userData1} />
    {/* </ErrorBoundary > */}

    {/* <ErrorBoundary> */}
      <UserProfileData  userData={userData3} /> 
    {/* </ErrorBoundary > */}
       
        
       
        
    </>
  )
}

export default Profile