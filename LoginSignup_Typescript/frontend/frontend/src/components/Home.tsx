

const Home = () => {

  const handelLogout = ()=>{
    localStorage.removeItem("token");
    Navigation
  }
  return (
    <div>
      <button onClick={handelLogout}>Logout-Btn</button>
    </div>
  )
}

export default Home