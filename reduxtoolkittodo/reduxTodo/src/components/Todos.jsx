import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const Todos = () => {
   const todos = useSelector(state=>state.todos)
   const dispatch = useDispatch() 
  return (
    <>
        <div className='text-center m-auto'>Todos</div>
        <ul className='list-none'>
            {todos.map((todo)=>(
                <li key={todo.id} className="flex items-center justify-between mb-2 px-10">
                    <div className="text-gray-700 ">{todo.text}</div>
                    <button 
                    className="bg-red-500 hover:bg-red-700 px-3 py-2 text-white" 
                    onClick={()=> dispatch(removeTodo(todo.id))} >X</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Todos