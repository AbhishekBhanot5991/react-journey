import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })

  const navigate = useNavigate();

  const handleInputChange = (e) =>{
    
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  const handleLogin = async (e) =>{
    try{
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/api/login', formData);
      // console.log("login successful", response.data)
      Cookies.set('authToken', response.data.token);
      props.setIsAuthenticated(true);

      toast.success('Login successfully');
      navigate('/dashboard')
    }
    catch(error){
      if (error.response) {
        console.error('Login failed', error.response.data);
        toast.error('Login failed');
      } else if (error.request) {
        console.error('Login request failed:', error.request);
        toast.error('Login request failed');
      } else {
        console.error('Login error:', error.message);
        toast.error('Login failed');
      }
    }
  }
  return (
    <div className='background'>  
        <div className="card">
          <h1 style={{textAlign:"center"}}>Login</h1>
          <form action="" onSubmit={handleLogin}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' onChange={handleInputChange} value={formData.username}/>
            <label htmlFor="">Password</label>
            <input type="text" name='password' onChange={handleInputChange} value={formData.password}/>
            <button type='submit' variant="primary">Submit</button>
          </form>
          <span>Don't have an account??? <Link to='/register'>Register Here</Link></span>
        </div>
    </div>
  )
}

export default Login