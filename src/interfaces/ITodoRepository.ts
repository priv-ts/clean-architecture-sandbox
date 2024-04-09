import { Todo } from "../entities/Todo";

export interface ITodoRepository {
  findAll(): Todo[];
  save(todo: Todo): string;
  findById(id: string): Promise<Todo | null>;
  delete(id: string): string | null;
  update(id: string, todo: Todo): Promise<Todo | null>;
}