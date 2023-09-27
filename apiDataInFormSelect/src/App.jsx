import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser,setSelectedUser] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((data)=>{
      setUsers(data);
    })
    .catch((error)=>{
      console.error(`Error fetching the data`, error)
    })
  }, [])
  

  const handleUserChange = (e) =>{
    setSelectedUser(e.target.value)
  }

  return (
    <>
      <h1>User Selection</h1>    
      <form>
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">Select a user</option>
          {users.map((user)=>(
            <option key={user.id} value={user.name}>{user.name}</option>
          )
          )}
        </select>
      </form>
    </>
  )
}

export default App
