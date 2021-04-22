import { useState } from "react";
import { nanoid } from "nanoid";
import "./form.css";

function Form({ todos, setTodos, date }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length < 1) return;
    setTodos([{ id: nanoid(3), desc: todo, createdAt: date }, ...todos]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write a ToDo..."
        value={todo}
        autoFocus
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
