import React, { useState } from 'react'

const MyButton = () => {
    const [count, setCount] = useState(0)

    const handleButtonClick = () =>{
        setCount( count + 1 )
    }
  return (
    <>
        <h1>In this example Button count is increasing according to individual button click</h1>
        <button style={{marginRight:'1rem'}} onClick={handleButtonClick}>My Button {count}</button>
    </>
  )
}

export default MyButton