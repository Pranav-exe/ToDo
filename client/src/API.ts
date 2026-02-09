// client/src/api.ts
import axios, { AxiosResponse } from "axios";
import { ITodo, ApiDataType } from "./Types/Type";

// Base URL from environment variable (Docker / local aware)
const baseUrl = "/api";


// ---------------------- API FUNCTIONS ----------------------

// Get all todos
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  return axios.get<ApiDataType>(`${baseUrl}/todos`);
};

// Add a new todo
export const addTodo = async (
  formData: Omit<ITodo, "_id" | "createdAt" | "updatedAt">, // client doesn't provide _id or timestamps
): Promise<AxiosResponse<ApiDataType>> => {
  const todo = {
    name: formData.name,
    description: formData.description,
    status: false, // default new todo as incomplete
  };

  return axios.post<ApiDataType>(`${baseUrl}/add-todo`, todo);
};

// Update a todo (mark as done)
export const updateTodo = async (
  todo: ITodo,
): Promise<AxiosResponse<ApiDataType>> => {
  const body = {
    name: todo.name,
    description: todo.description,
    status: todo.status,
  };
  return axios.put<ApiDataType>(`${baseUrl}/edit-todo/${todo._id}`, body);
};

// Delete a todo
export const deleteTodo = async (
  _id: string,
): Promise<AxiosResponse<ApiDataType>> => {
  return axios.delete<ApiDataType>(`${baseUrl}/delete-todo/${_id}`);
};
