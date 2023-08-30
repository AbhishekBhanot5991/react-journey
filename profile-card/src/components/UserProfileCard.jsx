import React from 'react';
import ProfileImage from '../../public/abhishek.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './UserProfileCard.css';

const UserProfileCard = () => {
  return (
    <div className="container">

    <div className='profile-card'>
        <img
        src={ProfileImage}
        alt="User Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Abhishek Bhanot</h2>
      <p className="profile-bio">Frontend Developer</p>
      <div className="profile-social">
        <a href="https://www.instagram.com/js_ninja_coding/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon/>
        </a>
        <a href="https://github.com/AbhishekBhanot5991" target="_blank" rel="noopener noreferrer">
          <GitHubIcon/>
        </a>
      </div>
    </div>
    </div>
  )
}

export default UserProfileCard