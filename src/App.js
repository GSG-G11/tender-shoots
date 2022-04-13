import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Favorites, Home } from './Pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paint" element={<h1>Paint</h1>} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
