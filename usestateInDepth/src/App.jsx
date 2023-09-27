import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue,setInputValue]= useState("Abhishek")

  const handleChange = (e) =>{
    const newValue =  e.target.value;
    
    setInputValue(newValue)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      {inputValue}
    </>
  )
}

export default App
