import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none text-gray-100 py-2 px-4 transition-colors duration-200"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-5 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo