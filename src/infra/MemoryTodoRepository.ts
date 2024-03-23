import { ITodoRepository } from "../interfaces/ITodoRepository";
import { Todo } from "../entities/Todo";

export class MemoryTodoRepository implements ITodoRepository {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  save(todo: Todo): string {
    this.todos.push(todo);
    return todo.id;
  }
}