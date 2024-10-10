import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Design from './pages/designPage';
import Program from './pages/programPage';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* The route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route path="/designPage" element={<Design />} />
          <Route path="/programPage" element={<Program />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
