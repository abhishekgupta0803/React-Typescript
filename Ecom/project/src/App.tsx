import  Sidebar  from './components/Sidebar';
import './App.css'
import {
  Route,
  BrowserRouter
  as
  Router,
  Routes
} from "react-router-dom";
import MainContent from './components/MainContent';

const App = () => {
  return (
    <Router >
      <div className='flex h-screen'>
       < Sidebar />
       <div className="rounded w-full flex justify-between flex-wrap">
        <Routes>
            <Route path='/' element={<MainContent />}></Route>
        </Routes>
       </div>
      </div>
    </Router>
  )
}

export default App