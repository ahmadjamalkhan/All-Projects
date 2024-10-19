import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
function App() {
  const [ShowLogin, setShowLogin] = useState(false);

  return (
    <>
      {ShowLogin ? <LoginPopup  setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
