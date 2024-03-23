import { Todo } from "../entities/Todo";

export interface ITodoRepository {
  save(todo: Todo): void;
  detail(id: string): Todo;
}