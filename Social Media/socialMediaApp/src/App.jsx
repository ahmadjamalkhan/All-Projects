import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className=" app-container container mx-auto main">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Navbar />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
