import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='glass-panel p-6 rounded-2xl mb-8 relative overflow-hidden group' onSubmit={(e) => saveTodo(e, formData)}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor='name' className="text-sm font-medium text-slate-400 ml-1">Task Name</label>
            <input 
              onChange={handleForm} 
              type='text' 
              id='name' 
              placeholder="What needs to be done?"
              className="input-field"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor='description' className="text-sm font-medium text-slate-400 ml-1">Description</label>
            <input 
              onChange={handleForm} 
              type='text' 
              id='description' 
              placeholder="Add some details..."
              className="input-field"
              autoComplete="off"
            />
          </div>
        </div>
        
        <button 
          disabled={formData === undefined ? true: false} 
          className="btn-primary flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {(FiPlus as any)({ className: "w-5 h-5" })}
          <span>Add Task</span>
        </button>
      </div>
    </form>
  )
}

export default AddTodo
