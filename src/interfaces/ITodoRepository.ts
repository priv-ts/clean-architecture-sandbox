import { Todo } from "../entities/Todo";

export interface ITodoRepository {
  findAll(): Todo[];
  save(todo: Todo): string;
  findById(id: string): Promise<Todo | null>;
}