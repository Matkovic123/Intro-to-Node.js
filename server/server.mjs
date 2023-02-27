import express from "express";
import bp from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bp.urlencoded({ extended: true })); // to parse all the data in a query string
app.use(bp.json());
app.use(morgan("dev")); // for logging, dev is a level of logging

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);

  res.json(newTodo);
});

app.get("/todo", (req, res) => {
    res.json(db);
});

app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});
