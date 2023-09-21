import React, {useState, useContext} from 'react';
import UserContext from '../context/userContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <h2 className='py-4'>Login</h2>
        <input type="text" placeholder='username' className='py-2 px-5 text-black outline-none rounded-full' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        {" "}
        <input type="password" placeholder='password' className='py-2 px-5 text-black outline-none rounded-full' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button className='rounded-full bg-emerald-900 border-white px-4 py-2 ml-2' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login