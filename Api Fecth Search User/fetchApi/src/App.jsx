import { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";

  const userData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error();
    }
  };
  useEffect(() => {
    userData(API);
  }, []);

  return (
    <>
<div className="container">
          <UserInfo users={users} />
  </div>     
     
    </>
  );
}

export default App;
