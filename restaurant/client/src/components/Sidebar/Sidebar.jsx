import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({ handleLogout }) => {
    
  return (
    <nav id="sidebar">
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>Log Out</Link>
        </li>

      </ul>
    </nav>
  )
}

export default Sidebar