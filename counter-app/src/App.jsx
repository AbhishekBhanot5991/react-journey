
import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)

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

      {/* this is for increment  */}
      <button onClick={()=> setCount((count)=>count+1)}>Increment</button>
      
      {/* this is for decrement  */}
      <button onClick={()=> setCount((count)=>count-1)}>Decrement</button>

      {/* this is to reset  */}
      <button onClick={()=> setCount(0)}>Reset</button>

      <p>
        Now notice when you click decrement button once the value is zero<br/>
        it will go in minus we don't want that<br/>
        in next project i'll solve this issue
      </p>
    </>
  )
}

export default App
