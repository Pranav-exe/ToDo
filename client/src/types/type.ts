// client/src/types/type.ts

export interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type TodoProps = {
  todo: ITodo;
};

export interface ApiDataType {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
}
