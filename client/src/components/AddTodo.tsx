import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { ITodo } from '../types/type'

type Props = {
  saveTodo: (e: React.FormEvent, formData: Omit<ITodo, "_id" | "createdAt" | "updatedAt"> & Partial<{ _id: string }>) => void
  editingTodo?: ITodo | null
  cancelEdit?: () => void
}

const AddTodo: React.FC<Props> = ({ saveTodo, editingTodo = null, cancelEdit }) => {
  const [formData, setFormData] = useState<Omit<ITodo, "_id" | "createdAt" | "updatedAt"> & Partial<{ _id: string }>>({
    name: '',
    description: '',
    status: false
  })

  // Pre-fill the form if editing
  useEffect(() => {
    if (editingTodo) {
      setFormData({
        _id: editingTodo._id,        // <-- Include _id for editing
        name: editingTodo.name,
        description: editingTodo.description,
        status: editingTodo.status
      })
    } else {
      setFormData({ name: '', description: '', status: false })
    }
  }, [editingTodo])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <form
      className='glass-panel p-6 rounded-2xl mb-8 relative overflow-hidden group'
      onSubmit={(e) => saveTodo(e, formData)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor='name' className="text-sm font-medium text-slate-400 ml-1">Task Name</label>
            <input
              id='name'
              type='text'
              placeholder="What needs to be done?"
              className="input-field"
              value={formData.name}
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor='description' className="text-sm font-medium text-slate-400 ml-1">Description</label>
            <input
              id='description'
              type='text'
              placeholder="Add some details..."
              className="input-field"
              value={formData.description}
              onChange={handleFormChange}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="flex gap-2 mt-2 justify-center">
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {(FiPlus as any)({ className: "w-5 h-5" })}
            <span>{editingTodo ? "Save" : "Add"} Task</span>
          </button>

          {editingTodo && cancelEdit && (
            <button
              type="button"
              onClick={cancelEdit}
              className="btn-secondary px-4 py-2 rounded-lg text-slate-700 bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  )
}

export default AddTodo