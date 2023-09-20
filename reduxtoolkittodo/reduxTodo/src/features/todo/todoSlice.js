import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {todos: [{id:1, text: "Hello World"}]}
// will create a slice
// slice is just a bigger version of reducer
export const todoSlice = createSlice({
    //slice will have a name
    //name is a redux toolkit property name
    name:'todo',
    initialState,
    //reducer will have property and function
    reducers:{
        // always remember this is syntax
        // always we will get in parameter state,action
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload    
            }
            state.todos.push(todo)        
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },   
    }
})
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer