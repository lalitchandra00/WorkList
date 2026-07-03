import AddTodo from './compoments/AddTodo'
import Todo from './compoments/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">WorkList</h1>
      <div className="w-full max-w-md">
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App
