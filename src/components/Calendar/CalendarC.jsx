import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../Form/Form";
import TodoItem from "../TodoItem/TodoItem";
import "./Calendar.css";

const initialState = [
  {
    id: "1",
    desc: "Learn react por que soy pendejo. Ando violento tirando codigo",
  },
  { id: "2", desc: "Learn react 2" },
  { id: "3", desc: "Learn react 3" },
];

function CalendarC() {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(initialState);

  const chanceDate = (date) => {
    setDate(date);
  };

  return (
    <main className="container">
      <section className="br">
        <Calendar onChange={chanceDate} value={date} />
      </section>
      {/* <h3>{date.toDateString()}</h3> */}
      <Form />
      <section className="todo-list">
        {todos.map(({ id, desc }) => (
          <TodoItem key={id} desc={desc} />
        ))}
      </section>
    </main>
  );
}

export default CalendarC;
