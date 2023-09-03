import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='background'>
        <div className="card">
          <h1 style={{textAlign:"center"}}>Login</h1>
          <form action="">
            <label htmlFor="">Username</label>
            <input type="text" name='username'  />
            <label htmlFor="">Password</label>
            <input type="text" name='password'  />
            <button type='submit'>Submit</button>
          </form>
          <span>Don't have an account??? <Link to='/register'>Register Here</Link></span>
        </div>
    </div>
  )
}

export default Login