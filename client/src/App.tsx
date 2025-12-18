import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiLayers } from 'react-icons/fi'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import FilterTabs from './components/FilterTabs'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

 const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
   e.preventDefault()
   addTodo(formData)
   .then(({ status, data }) => {
    if (status !== 201) {
      throw new Error('Error! Todo not saved')
    }
    setTodos(data.todos)
  })
  .catch((err) => console.log(err))
}

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not updated')
        }
        setTodos(data.todos)
      })
      .catch((err) => console.log(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
    .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Todo not deleted')
        }
        setTodos(data.todos)
      })
      .catch((err) => console.log(err))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.status
    if (filter === 'completed') return todo.status
    return true
  })

  return (
    <main className='App min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
          My Tasks
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Stay organized and productive
        </p>
      </motion.div>

      <AddTodo saveTodo={handleSaveTodo} />
      
      <FilterTabs filter={filter} setFilter={setFilter} />

      <div className="space-y-4">
        <AnimatePresence exitBeforeEnter>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo: ITodo) => (
              <TodoItem
                key={todo._id}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                todo={todo}
              />
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-slate-500"
            >
              {(FiLayers as any)({ className: "w-12 h-12 mb-4 opacity-50" })}
              <p className="text-lg">No tasks found</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default App
