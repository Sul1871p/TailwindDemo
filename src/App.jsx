import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import AboutPage from  './pages/About/AboutPage';
import MenuPage from './pages/Menu/MenuPage';
import ContactPage from './pages/Contact/ContactPage';
import ReservePage from './pages/Reserve/ReservePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reserve" element={<ReservePage />} />
      </Routes>
    </Router>
  );
}

export default App;
