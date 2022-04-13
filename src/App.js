import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/paint" element={<h1>Paint</h1>} />
        <Route path="/favourites" element={<h1>Favourites</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
