
import { useState } from 'react'
import './App.css'

function App() {
  const [range, setRange] = useState('')
  const [comment, setComment] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(Number(range) <= 5 && comment.length <= 10){
      alert('Please provide a comment explaining why the experience was poor');
      return;
    }
    console.log("Form Submitted");
    setRange(10)
    setComment('')
  }
  return (
    <>
      <div className="App">
        <div className="card">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Score: {range}	&#127775;</label>
            <input type="range" min="0" max="10" name="range" id="" value={range} onChange={(e)=> setRange(e.target.value)} />
            <label htmlFor="">Comment</label>
            <textarea name="" id="" cols="30" rows="10" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
