import React from 'react'

const Comment = ({author,text}) => (

    <div className='Comment'>
        <h4>Author: {author}</h4>
        <p>Message: {text}</p>
    </div>
)

export default Comment;