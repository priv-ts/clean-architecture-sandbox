import { ITodoRepository } from "../interfaces/ITodoRepository";
import { Todo } from "../entities/Todo";

export class TodoUseCases {
  constructor(private todoRepository: ITodoRepository) {}

  addTodo(title: string): Todo {
    const todo = new Todo(Date.now().toString(), title, false);
    this.todoRepository.save(todo);
    return todo;
  }

  getTodo(id: string): Todo {
    return this.todoRepository.detail(id);
  }
}