import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
function Dashboard({user}) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);


  const handleUser = () => {
    setShowUser(!showUser);
  };
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Menu List - Now at the top */}
        <ul className="menu-list">
          <li className="menu-item active">Dashboard</li>
          <li className="menu-item " onClick={()=>{navigate("/")}}  >Home</li>             
        </ul>

        {/* Profile Section - Now moved below */}
        <div className="profile-section">
          <img
            src="https://via.placeholder.com/100" // Replace with actual profile pic URL
            alt="Profile"
            className="profile-pic"
          />
          <h4 className="profile-name">{user}</h4>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Upper Section with Button */}
        <div className="upper-section">
          <h2 className="section-title">Dashboard Overview</h2>
          <button className="btn btn-primary custom-btn" onClick={handleUser}  >{showUser ? "hide Users" : "see all users"}</button>
        </div>

        {/* Lower Section with Table */}
        <div className="lower-section">
          {showUser&& <>
          
            <h2 className="section-title">Users Table</h2>
          <table className="table table-hover custom-table">
            <thead>
              <tr>
                <th>Userame</th>
                <th>Email</th>

              </tr>
            </thead>
            <tbody>
            { showUser&& users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          </>}
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
