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

  delete(id: string): string | null {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1)
      return this.todos[todoIndex].id;
    }
    return null;
  }

  async update(id: string, updatedTodo: Todo): Promise<Todo | null> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return null;
    }
    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }
}