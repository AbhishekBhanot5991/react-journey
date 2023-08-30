import React from 'react';
import { useState } from 'react';

const CommentForm = ({addComment}) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author.trim() !== '' && text.trim() !== '') {
          addComment({ author, text });
          setAuthor('');
          setText('');
        }
      };
  return (
    <>
        <form className='comment-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="" 
            placeholder='Your Name' 
            id="" 
            value={author}
            onChange={(e)=> setAuthor(e.target.value)} 
            />
            <textarea 
            placeholder='Your Comment' 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            >
            </textarea>
            <button type="submit">Add Comment</button>
        </form>
    </>
  )
}

export default CommentForm