import React from 'react'
import './List.css'
const List = () => {
  return (
    <div className='listMain'>
        <div className='fun'>
            <h2>Fun Facts About React</h2>
            <ul>
                <li>Was First Released in 2013</li>
                <li>Was Originally creatd by Jorden Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is Maintained By Facebook</li>
                <li>Powers 1000 of Enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
  )
}
console.log(List)
export default List