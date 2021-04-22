import "./TodoItem.css";

function TodoItem({ desc }) {
  return (
    <section className="card-todo">
      <div className="card-title">
        <label>{desc}</label>
      </div>
      <div className="actions">
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </section>
  );
}

export default TodoItem;
