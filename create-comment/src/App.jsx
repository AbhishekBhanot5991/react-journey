import React, { useState } from 'react'
import './App.css'
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (comment)=>{
    setComments([...comments, comment])
  }
  return (
    <div className='app'>
      <h1>Comment Section</h1>
      <CommentForm addComment={addComment}/>
      <CommentList comments={comments}/>
    </div>
  )
}

export default App;