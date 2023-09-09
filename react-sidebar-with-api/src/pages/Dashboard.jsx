import React, { useEffect, useState } from 'react'
// install using command npm i axios
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';
const Dashboard = () => {
  const [apiData, setApiData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1&per_page=10')
    .then((res)=>{
      setApiData(res.data.data)
      setTotalPages(Math.ceil(res.data.total / 10))
    })
    .catch((err) =>{
      console.log(`Error while fetching the data ${err}`)
    })
 
  }, [])

  const handleSearch = (e) =>{
    setSearchTerm(e.target.value)
    console.log(setSearchTerm(e.target.value))
  }
  const filteredData = apiData.filter((user) => {
    return user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return (
    <>
    <h2 className='mb-3'>Dashboard</h2>
    <input type="text" placeholder='search' style={{padding:'10px'}} value={searchTerm} onChange={handleSearch}/>
    <Table>
        <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Images</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>
          {
            filteredData.slice((currentPage - 1) * 10, currentPage * 10).map((user)=>(
              <tr key={user.id}>  
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <img 
                src={user.avatar} 
                alt={`${user.first_name} ${user.last_name}`}
                style={{width: '50px', height: 'auto'}}  
              
                 />
                <td className='buttons'>
                  <Button style={{marginLeft:"0px"}} variant="primary">View</Button>
                  <Button variant='warning'>Edit</Button>
                  <Button variant='danger'>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <div >
      <Pagination
        activepage={currentPage}
        totalpages={totalPages}
       
      />
      </div>
    </>
  )
}

export default Dashboard