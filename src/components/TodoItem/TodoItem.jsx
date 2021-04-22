import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ id, desc, createdAt, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(desc);

  const handleSaveTodo = () => {
    editTodo(id, editedTodo);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="card-todo">
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
        <div className="actions">
          <button onClick={handleSaveTodo}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <section className="card-todo">
      <div className="card-title">
        <label>{desc}</label>
      </div>
      <div className="actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => deleteTodo(id)}>Remove</button>
      </div>
    </section>
  );
}

export default TodoItem;
