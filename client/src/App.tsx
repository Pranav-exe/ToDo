import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiLayers } from "react-icons/fi";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import FilterTabs from "./components/FilterTabs";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";
import { ITodo } from "./types/Type";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("active");
  const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);

  // ------------------- Fetch Todos -------------------
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    try {
      const { data } = await getTodos();
      setTodos(data.todos);
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------- Add / Edit Todo -------------------
  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: Omit<ITodo, "_id" | "createdAt" | "updatedAt"> & Partial<{ _id: string }>
  ) => {
    e.preventDefault();
    try {
      if (editingTodo) {
        // --- Update existing ---
        const updated = { ...editingTodo, ...formData, status: false };

        // Call backend to update
        const { status, data } = await updateTodo(updated);
        if (status !== 200) throw new Error("Error! Todo not updated");

        // Sync state with server response
        setTodos(data.todos);

        setEditingTodo(null); // Clear edit mode
      } else {
        // --- Add new ---
        const { status, data } = await addTodo(formData);
        if (status !== 201) throw new Error("Error! Todo not saved");
        setTodos(data.todos);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------- Toggle Complete -------------------
  const handleToggleTodo = async (todo: ITodo): Promise<void> => {
    try {
      const updated = { ...todo, status: !todo.status };
      const { status, data } = await updateTodo(updated);
      if (status !== 200) throw new Error("Error! Todo not updated");
      setTodos(data.todos);
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------- Delete Todo -------------------
  const handleDeleteTodo = async (_id: string): Promise<void> => {
    try {
      const { status, data } = await deleteTodo(_id);
      if (status !== 200) throw new Error("Error! Todo not deleted");
      setTodos(data.todos);
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------- Filtered Todos -------------------
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  return (
    <main className="App min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
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

      <AddTodo
        saveTodo={handleSaveTodo}
        editingTodo={editingTodo} // Pass edit info to form
        cancelEdit={() => setEditingTodo(null)}
      />

      <FilterTabs filter={filter} setFilter={setFilter} />

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo: ITodo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                updateTodo={handleToggleTodo}    // toggle complete
                deleteTodo={handleDeleteTodo}    // delete task
                startEditing={setEditingTodo}
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
  );
};

export default App;