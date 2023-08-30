import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './UserProfileCard.css'
const UserProfileCard = (props) => {
    const {name, picture, bio} = props;
  return (
    <div className='profile-card'>
        <img src={picture} alt={`${name}'s Profile`} className='profile-image'/>
        <h2 className='profile-name'>{name}</h2>
        <p className='profile-bio'>{bio}</p>
        <div className='margin-cstm'>
            <a href="https://www.instagram.com/js_ninja_coding/" target='_blank'><InstagramIcon/></a>
            <a href="https://github.com/AbhishekBhanot5991" target='_blank'><GitHubIcon/></a>
        </div>
    </div>
  )
}

export default UserProfileCard