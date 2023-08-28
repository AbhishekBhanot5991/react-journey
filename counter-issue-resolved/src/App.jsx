
import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)
  const handleSubmit = () =>{
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>
        resolving the negative value issue 
      </p>

      {/* here we are setting the display counts */}
      <h2>{count}</h2>

      {/* this is for increment  */}
      <button onClick={()=> setCount((count)=>count+1)}>Increment</button>
      
      {/* this is for decrement  */}
      <button onClick={handleSubmit}>Decrement</button>

      {/* this is to reset  */}
      <button onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default App
