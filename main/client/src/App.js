import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('coding-work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('coding-work');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="app">
      <div className="content-wrapper">
        <div className={`fixed-logo-container ${isScrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo" onClick={handleHomeClick}>
            <img src="/assets/miloetzhomebutton.png" alt="Milo Etz" />
          </Link>
          <nav className={`nav-dropdown ${isScrolled ? 'visible' : ''}`}>
            <Link to="/" onClick={handleHomeClick}>home</Link>
            <a href="/#coding-work" onClick={handleWorkClick}>work</a>
            <Link to="/design">design</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </div>
        <header className="header">
          <nav className="nav">
            <Link to="/" onClick={handleHomeClick}>home</Link>
            <a href="/#coding-work" onClick={handleWorkClick}>work</a>
            <Link to="/design">design</Link>
            <Link to="/contact">contact</Link>
            <a href="https://www.rhomedog.com/" target="_blank" rel="noopener noreferrer" className="nav-logo-link">
              <img src="/assets/rhomeDOG002.png" alt="rhomedog" className="nav-logo" />
            </a>
          </nav>
        </header>

        <main className={isScrolled ? 'scrolled' : ''}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Portfolio />} />
            <Route path="/design/:projectSlug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 milo etz.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
