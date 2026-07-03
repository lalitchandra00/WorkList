import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})
//State give the values which is already present 
// Action is parameter type which is use to provide values to the function
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

