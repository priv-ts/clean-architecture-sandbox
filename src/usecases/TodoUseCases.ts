import { ITodoRepository } from "../interfaces/ITodoRepository";
import { Todo } from "../entities/Todo";

export class TodoUseCases {
  constructor(private todoRepository: ITodoRepository) {}

  getTodos(): Todo[] {
    return this.todoRepository.findAll();
  }

  addTodo(title: string) {
    const todo = new Todo(Date.now().toString(), title, false);
    this.todoRepository.save(todo);
    return todo;
  }
}