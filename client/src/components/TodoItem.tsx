import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiTrash2 } from 'react-icons/fi'
import { ITodo, TodoProps } from '../types/Type'
type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
  startEditing: (todo: ITodo) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo, startEditing }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className='glass-card p-4 rounded-xl mb-3 flex items-center justify-between group'
    >
      <div className='flex items-center gap-4 flex-1'>
        <button
          onClick={() => updateTodo(todo)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${todo.status
            ? 'bg-gradient-to-r from-violet-500 to-cyan-500 border-transparent'
            : 'border-slate-500 hover:border-cyan-400'
            }`}
        >
          {todo.status && (FiCheck as any)({ className: "text-white w-3.5 h-3.5" })}
        </button>

        <div className="flex-1">
          <h1 className={`text-lg font-medium transition-all duration-300 ${todo.status ? 'text-slate-500 line-through' : 'text-slate-200'
            }`}>
            {todo.name}
          </h1>
          <span className={`text-sm transition-all duration-300 ${todo.status ? 'text-slate-600' : 'text-slate-400'
            }`}>
            {todo.description}
          </span>
        </div>
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => startEditing(todo)}
          className='p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg'
          aria-label="Edit task"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTodo(todo._id)}
          className='p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg'
          aria-label="Delete task"
        >
          {(FiTrash2 as any)({ className: "w-5 h-5" })}
        </button>
      </div>
    </motion.div>
  )
}
export default Todo