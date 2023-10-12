const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

let todoList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Walk the dog" },
  { id: 3, task: "Do laundry" },
];

app.use(bodyParser.json());
app.use(cors());

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const todo = {
    id: todoList.length + 1,
    task: req.body.task,
  };

  todoList.push(todo);
  res.json(todo);
});

app.put("/api/todo/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");

  todo.task = req.body.task;
  res.json(todo);
});

app.delete("/api/todo/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");

  const index = todoList.indexOf(todo);
  todoList.splice(index, 1);

  res.json(todo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
