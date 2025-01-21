import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import WiggleText from './TextEffects';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <WiggleText text="milo etz." />
          <button className={`menu-button ${menuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
            +
          </button>
          <nav className={`App-nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleMenu}>HOME</Link>
            <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
            <Link to="/portfolio" onClick={toggleMenu}>PORTFOLIO</Link>
            <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Milo Etz</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;