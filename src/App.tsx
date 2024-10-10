import React from 'react';
import './App.css'
import Home from './pages/home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Vit from './pages/vit';
import Rec from './pages/reac';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* The route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route path="/reac" element={<Vit />} />
          <Route path="/vit" element={<Rec />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
