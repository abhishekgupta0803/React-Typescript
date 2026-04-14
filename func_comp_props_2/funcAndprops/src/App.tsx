import './App.css'
import Hello from './components/Hello'
import Home from './components/Home'
import Employee from './PropsPassing/Employee'
import Student from './PropsPassing/Student'
import User from './PropsPassing/User'

function App() {


  return (
    <>
    
     <div>
      < Hello/>
     </div>

     <div>
        <Home />
     </div>

  
     <div>
        <User name="Abhishek Gupta" age={23}  gender="M"/>
     </div>

     <div>
        <Employee name="Aniket" desg='Software Engineer' />
     </div>

     <div>
        <Student id={1234} name="Robin"  college="KIET "/>
     </div>
    </>
  )
}

export default App
