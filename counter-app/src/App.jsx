
import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)

const handleDecrement = () =>{
  if(count>0){
    setCount(count - 1)
  }
}

  return (
    <>
      <h1>Counter App</h1>
      <p>
        If you guys are wondering how css is being applied here<br/>
        so this is default css.<br/>
        Our focus here to understand the functionality. 
      </p>

      {/* here we are setting the display counts */}
      <h2>{count}</h2>

      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      {/* this is for increment  */}
      <button onClick={()=> setCount((count)=>count+1)}>Increment</button>
      
      {/* this is for decrement  */}
      <button onClick={handleDecrement}>Decrement</button>

      {/* this is to reset  */}
      <button onClick={()=> setCount(0)}>Reset</button>
      </div>

    </>
  )
}

export default App
