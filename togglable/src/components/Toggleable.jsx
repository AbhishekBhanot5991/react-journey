import React, { useState } from 'react';

const Toggleable = ({content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () =>{
        setIsOpen((prevIsOpen) => !prevIsOpen)
    };
  return (
    <div className='text-center'>
        <button onClick={toggleContent}>
            {isOpen ? 'Hide' : 'Show'} Content
        </button>
        {isOpen && <div>{content}</div>}
    </div>
  )
}

export default Toggleable