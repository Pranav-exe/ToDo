import { Schema, model, Document } from "mongoose";
import { ITodo } from "../types/todo-type";

/**
 * Mongoose document type
 * Extends shared ITodo with MongoDB fields
 */
export interface ITodoDocument extends ITodo, Document {}

/**
 * Todo Schema
 */
const todoSchema = new Schema<ITodoDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**
 * Export Todo model
 */
export const Todo = model<ITodoDocument>("Todo", todoSchema);
export default Todo;