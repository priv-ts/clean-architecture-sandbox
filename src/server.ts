import express from 'express';
import {MemoryTodoRepository} from "./infra/MemoryTodoRepository";
import {TodoUseCases} from "./usecases/TodoUseCases";

const app = express();
app.use(express.json());

const todoRepository = new MemoryTodoRepository();
const todoUseCase = new TodoUseCases(todoRepository);

app.get('/todos', async (req, res) => {
  const todos = todoUseCase.getTodos() ? todoUseCase.getTodos() : "not data";
  res.status(200).json(todos);
});

app.post('/todos', async (req, res) => {
  const { title } = req.body;
  const todo = todoUseCase.addTodo(title)
  res.status(201).json(todo);
});

app.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  // 非同期呼び出しにしないときに空オブジェクトが返ってしまう(callbackにasyncを、usecaseの呼び出しにawaitを)
  const todo = await todoUseCase.getTodo(id);
  res.status(200).json(todo);
})

app.delete('/todos/:id', async(req, res) => {
  const { id } = req.params;
  const todoId = todoUseCase.removeTodo(id);
  res.status(200).send({id: todoId});
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

