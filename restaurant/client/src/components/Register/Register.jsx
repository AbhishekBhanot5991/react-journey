import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
  return (
    <div className='background'>
        <div className="card">
          <h1 style={{textAlign:"center"}}>Register</h1>
          <form action="">
            <label htmlFor="">Username</label>
            <input type="text" name='username'  />
            <label htmlFor="">Name</label>
            <input type="text" name='name'  />
            <label htmlFor="">Password</label>
            <input type="password" name='password'  />
            <label htmlFor="">Confirm Password</label>
            <input type="password" name='cPassword'  />
            <button type='submit'>Submit</button>
          </form>
          <span>Already have an account??? <Link to="/login">Login Here</Link></span>
        </div>
    </div>
  )
}

export default Register