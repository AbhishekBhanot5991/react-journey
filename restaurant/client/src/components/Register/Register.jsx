import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
const Register = () => {
  const [formData, setFormData] = useState({
    username:'',
    name:'',
    password:'',
    cPassword:''
  });

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formData.password !== formData.cPassword){
      alert('Password and Confirm Password must match.');
      return;
    }
    try{
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log('Registration successful', response.data);
      toast.success('Registration successful');
      Navigate('/login')
    }
    catch(err){
      console.error('Registration failed', err.response.data)
      toast.error('Registration failed');
    }
  }

  return (
    <div className='background'>
        <div className="card">
          <h1 style={{textAlign:"center"}}>Register</h1>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' onChange={handleInputChange} value={formData.username} />
            <label htmlFor="">Name</label>
            <input type="text" name='name'  onChange={handleInputChange} value={formData.name} />
            <label htmlFor="">Password</label>
            <input type="password" name='password' onChange={handleInputChange} value={formData.password}/>
            <label htmlFor="">Confirm Password</label>
            <input type="password" name='cPassword'  onChange={handleInputChange} value={formData.cPassword} />
            <button type='submit'>Submit</button>
          </form>
          <span>Already have an account??? <Link to="/login">Login Here</Link></span>
        </div>
    </div>
  )
}

export default Register