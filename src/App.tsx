import React from 'react';
import './App.css'
import Home from './pages/home'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* The route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  )
}

export default App
