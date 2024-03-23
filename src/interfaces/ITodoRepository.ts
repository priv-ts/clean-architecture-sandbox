import { Todo } from "../entities/Todo";

export interface ITodoRepository {
  findAll(): Todo[];
}