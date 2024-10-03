import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAllComplete, setShowAllCOmplete] = useState(true);

  const handleAdd = () => {
    if (todo)
      setTodos([...todos, { id: uuidv4(), todo: todo, isComplete: false }]);
    setTodo("");
  };
  const handleCheckBox = (e) => {
    const id = e.target.name;
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  const handleEdit = (e) => {
    const id = e.target.id;
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setTodo(editTodo.todo);
    } else {
      console.log("todo not found");
    }
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  const handleDelete = (e) => {
    const id = e.target.id;

    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos); // Only set if there are todos
    }
    console.log("Loaded from Local Storage:", storedTodos); // Debugging
  }, []);

  // Save todos to Local Storage whenever the todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos)); // Only save if todos exist
    }
    console.log("Saving to Local Storage:", todos); // Debugging
  }, [todos]);
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 bg-violet-100 rounded-lg shadow-lg min-h-[80vh]">
        <h2 className="text-2xl font-bold text-center mb-4">Add a Todo</h2>
        <div className="flex justify-center items-center mb-5">
          <input
            type="text"
            className="w-1/2 p-2 border border-violet-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Type your todo here..."
          />
          <button
            className="ml-4 bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold text-white rounded-md shadow transition duration-300"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        {todos.length > 0 ? (
          <div className="flex flex-col gap-42">
            <h2 className=" text-center text-lg font-bold mb-2">Your Todos</h2>
            
            <label htmlFor="" className="text-center" >  <input
              type="checkbox"
              onChange={(e) => setShowAllCOmplete(!showAllComplete)}
              checked={showAllComplete}
            />  Show All Completed</label>
          </div>
        ) : (
          <h2 className=" text-center text-lg font-bold mb-2">Empty</h2>
        )}
        <div className="todos space-y-2 mt-4">
          {/* {todos.length > 0 ? <>h1iasdans</> : ""} */}
          {todos
            .filter((todo) => showAllComplete || !todo.isComplete)
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className={` ${
                    todo.isComplete ? "complteted" : ""
                  } max-w-4xl mx-auto  todo flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name={todo.id}
                      checked={todo.isComplete}
                      onChange={handleCheckBox}
                      className="mr-2 cursor-pointer w-4 h-4"
                    />
                    <div
                      className={`text ${
                        todo.isComplete
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.todo}
                    </div>
                  </div>
                  <div className="buttons space-x-2 flex">
                    <button
                      className={`bg-violet-800 hover:bg-violet-950 cursor-pointer p-2 text-sm font-bold text-white rounded-md ${
                        todo.isComplete
                          ? "disabled"
                          : ""
                      }`}
                      disabled={todo.isComplete}
                      id={todo.id}
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 p-2 text-sm font-bold text-white rounded-md"
                      id={todo.id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
