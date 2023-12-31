import { useState } from 'react'
import Cookies from 'js-cookie'
import{Routes, Route, Navigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import axios from './config/axiosConfig'
// import { AuthProvider } from './components/AuthContext/AuthContext'
import './App.css'
import Profile from './components/Profile/Profile'
function App() {
  const location = useLocation();
  const isDashboardOrProfile = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/profile');
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('authToken'))

    const handleLogout = () => {
      console.log('Is authenticated before logout:', isAuthenticated);
      // Clear the authentication token
      Cookies.remove('authToken');
      setIsAuthenticated(false);
      console.log('Logged out');
    };
  return (
    <>
      <div className="App">
        {isAuthenticated && isDashboardOrProfile && <Sidebar handleLogout={handleLogout}/>}
        {/* <Login/> */}
        <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard'  element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}/>
          <Route path='/profile'  element={isAuthenticated ? <Profile /> : <Navigate to="/dashboard" />}/>
        </Routes>
      </div>       
    </>
  )
}

export default App
