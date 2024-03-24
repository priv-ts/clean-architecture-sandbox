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

  async findById(id: string): Promise<Todo | null> {
    const todo = this.todos.find(todo => todo.id === id);
    return todo || null;
  }
}