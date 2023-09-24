import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const handleButtonClick = () =>{
      setCount(count + 1)
  }
  return (
    <>
      <h1>Counter that Updates Together</h1>
      <MyButton count = {count} onClick={handleButtonClick}/>
      <MyButton count = {count} onClick={handleButtonClick}/>
    </>
  )
}

export default App
