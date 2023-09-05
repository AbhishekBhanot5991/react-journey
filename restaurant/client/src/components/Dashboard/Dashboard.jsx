import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios as usual
import './Dashboard.css'
const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Example API request using the axios instance from axiosConfig.js
    axios.get('http://localhost:5000/api/get-users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='dashboard-container'>
        <h1>Dashboard</h1>
      <table className='table-primary w-100'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))

          }
        </tbody>
      </table>
        

    </div>
  );
};

export default Dashboard;
