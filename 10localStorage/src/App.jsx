import { useState } from "react";

import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
      </div>
    </TodoProvider>
  );
}

export default App;
