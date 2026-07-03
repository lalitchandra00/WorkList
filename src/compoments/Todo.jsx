import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  if (todos.length === 0) {
    return <p className="text-gray-500 text-center py-8">No todos yet. Add one above!</p>
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg group"
        >
          <span className="text-gray-100">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Todo