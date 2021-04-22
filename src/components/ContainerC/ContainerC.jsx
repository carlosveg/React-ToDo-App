import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import "./ContainerC.css";

function Container() {
  const initialState = JSON.parse(localStorage.getItem("todos"));
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("date", date.toDateString());
  }, [date]);

  const chanceDate = (date) => {
    setDate(date);
  };

  const editTodo = (id, todo) => {
    const newTodos = todos.map((todoItem) => {
      if (todoItem.id === id) return { ...todoItem, desc: todo };
      return todoItem;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className="container">
      <section className="calendar">
        <Calendar onClickDay={chanceDate} value={date} />
      </section>
      <Form todos={todos} setTodos={setTodos} date={date.toDateString()} />
      <section className="todo-list">
        {todos.length > 0 ? (
          todos
            .filter((todo) => todo.createdAt === date.toDateString())
            .map(({ id, desc, createdAt }) => (
              <TodoItem
                key={id}
                id={id}
                desc={desc}
                createdAt={createdAt}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))
        ) : (
          <h3>Empty list :c</h3>
        )}
      </section>
    </main>
  );
}

export default Container;
