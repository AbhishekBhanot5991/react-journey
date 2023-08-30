import React from 'react';
import Comment from '../components/Comment';
const CommentList = ({comments}) => (
    <div className='comment-list'>
        {comments.map((comment,index)=>(
            <Comment key={index} author={comment.author} text={comment.text}/>
        ))}
    </div>
  )


export default CommentList