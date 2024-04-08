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

  async getTodo(id: string): Promise<Todo | string> {
    const todo = await this.todoRepository.findById(id);
    return todo ?? 'not found';   // repository側ではnullを返してみたので、usecase側でnullをハンドリングする
  }

  removeTodo(id: string) {
    const todo = this.todoRepository.delete(id);
    return todo ?? null;   // usecase側で{ id: hoge }の形で返却するためnullを返す
  }
}