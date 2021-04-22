import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import "./ContainerC.css";

function Container() {
  const [date, setDate] = useState(new Date());
  const initialState = [
    { id: "1", desc: "Learn react 1", createdAt: date },
    { id: "2", desc: "Learn react 2", createdAt: date },
    { id: "3", desc: "Learn react 3", createdAt: date },
  ];
  const [todos, setTodos] = useState(initialState);

  const chanceDate = (date) => {
    setDate(date);
  };

  return (
    <main className="container">
      <section className="calendar">
        <Calendar onClickDay={chanceDate} value={date} />
      </section>
      <h3>{date.toDateString()}</h3>
      <Form todos={todos} setTodos={setTodos} date={date} />
      <section className="todo-list">
        {todos
          .filter(
            (todo) => todo.createdAt.toDateString() === date.toDateString()
          )
          .map(({ id, desc, createdAt }) => (
            <TodoItem key={id} desc={desc} createdAt={createdAt} />
          ))}
      </section>
    </main>
  );
}

export default Container;
