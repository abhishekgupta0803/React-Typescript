import ErrorBoundary from "./components/ErrorBoundary"
import Profile from "./components/Profile"
import Profile2 from "./components/Profile2"


const App = () => {
  return (
    <>
      <ErrorBoundary>
         <Profile/>  
       </ErrorBoundary>
       <ErrorBoundary>
         <Profile2/>  
       </ErrorBoundary>
     
   </>
  )
}

export default App