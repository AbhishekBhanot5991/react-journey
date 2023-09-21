import React,{useContext} from 'react'
import UserContext from '../context/userContext'
const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <div className='py-4'>Please Login</div>
    return <div className='py-4'>Welcome {user.username}</div>
}

export default Profile