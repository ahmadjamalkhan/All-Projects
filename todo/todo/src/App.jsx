import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const handleTodo = () => {
    if (date && todo) {
      setTodos([...todos, { name: todo, date: date }]);
      setTodo("");
      setDate("");
    }
  };
  const deleteTodo = (index) => {
    console.log(setTodos((prev) => prev));
    setTodos((prev) => prev.filter((todo, id) => id !== index));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")); // get stored todos from localStorage
    if (storedTodos) {
      setTodos(storedTodos); // set the state with stored todos
    }
  }, []); // runs only on the first render (componentDidMount)

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); // save todos to localStorage
    }
  }, [todos]);
  return (
    <center className="todo-container continer">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleTodo}>
            Add
          </button>
        </div>
      </div>

      {todos.map((todo, index) => (
        <div className="row todos" key={index}>
          <div className="col-6">{todo.name}</div>
          <div className="col-4">{todo.date}</div>
          <div className="col-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </center>
  );
}

export default App;
