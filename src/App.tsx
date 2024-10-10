import Home from './page/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App