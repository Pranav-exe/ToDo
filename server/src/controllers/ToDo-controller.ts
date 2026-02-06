import { Request, Response } from "express";
import { ITodo } from "../types/todo-type";
import Todo, { ITodoDocument } from "../models/ToDo-Model";

// Get all todos
const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodoDocument[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Add a todo
const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodoDocument = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo = await todo.save();
    const allTodos = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Update a todo
const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedTodo: ITodoDocument | null = await Todo.findByIdAndUpdate(
      id,
      body,
      { new: true },
    );
    const allTodos: ITodoDocument[] = await Todo.find();

    res.status(200).json({
      message: "Todo updated",
      todo: updatedTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Delete a todo
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodoDocument | null = await Todo.findByIdAndRemove(
      req.params.id,
    );
    const allTodos: ITodoDocument[] = await Todo.find();

    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
