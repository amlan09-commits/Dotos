import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface Todo {
  id: number
  text: string
  completed: boolean
}

const Todospage: React.FC = () => {
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>("")

  const addTodo = () => {
    if (!input.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    }

    setTodos([newTodo, ...todos])
    setInput("")
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#06141f] via-[#0b2239] to-[#071c2f] text-white px-4 sm:px-6 lg:px-10 py-8 font-inter">

      {/* Outer Glass Container */}
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 border-b border-white/10">
          <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Dotos
          </h1>

          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-emerald-400 transition text-sm sm:text-base cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Add Todo */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-xl bg-[#0f1f2e] border border-white/10 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition text-sm sm:text-base"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addTodo}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition cursor-pointer shadow-lg hover:shadow-emerald-500/30"
          >
            Add Task
          </motion.button>
        </div>

        {/* Todo Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-linear-to-br from-[#0f1f2e] to-[#0b1a27] border border-white/10 shadow-lg"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start gap-3">
                  <p
                    className={`text-base sm:text-lg wrap-word-break ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {todo.text}
                  </p>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-400 hover:text-red-500 text-sm cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`mt-5 text-sm px-4 py-2 rounded-lg transition w-full cursor-pointer ${
                    todo.completed
                      ? "bg-gray-700 text-gray-300"
                      : "bg-emerald-500 text-black hover:bg-emerald-600"
                  }`}
                >
                  {todo.completed ? "Completed" : "Mark as Done"}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="text-center mt-16 text-gray-500 text-sm sm:text-base animate-pulse">
            No tasks yet. Let’s build momentum 🚀
          </div>
        )}
      </div>
    </div>
  )
}

export default Todospage