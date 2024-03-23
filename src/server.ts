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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

