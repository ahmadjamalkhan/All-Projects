// import { useState } from 'react'
import Location from "./components/Location";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home";
import Popular from "./components/Section2/Popular";
import Trusted from "./components/Trusted";
import RealEstateSection from "./components/RealEstateSection";

function App() {
  return (
    <>
      <Location />
      <Navbar />
      <Home/>
      <Popular/>
      {/* <Trusted/> */}
      <RealEstateSection/>
    </>
  );
}

export default App;
