
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    console.log("Hello")
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> {
      setData(res.data)
    })
    .catch((error)=> {
     console.error(error)
    })
  }, [])
  

  return (
    <>
      {/* <h1>Hello Everyone</h1> */}
      <h1>Api Data:</h1>
      <ul>
        {data.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
