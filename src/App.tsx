import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Design from './pages/designPage';
import Program from './pages/programPage';
import SonicBod from './components/Design/sonicContent';
import PortalBod from './components/Design/portalContent';
import InvBod from './components/Design/inventoryContent';
import ContactBod from './components/Design/contactContent';
import AboutBod from './components/Design/aboutContent';
import ProjectBod from './components/Design/projectsContent';

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
          <Route path="/sonicContent" element={<SonicBod />} />
          <Route path="/portalContent" element={<PortalBod />} />
          <Route path="/InventoryContent" element={<InvBod />} />
          <Route path="/contactContent" element={<ContactBod />} />
          <Route path="/aboutContent" element={<AboutBod />} />
          <Route path="/projectsContent" element={<ProjectBod />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
