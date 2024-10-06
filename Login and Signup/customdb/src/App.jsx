import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup'; // Signup component import karna
import Home from './Home'; // Home component import karna
import Signin from './Signin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
