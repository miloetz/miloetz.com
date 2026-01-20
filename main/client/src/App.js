import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Link to="/" className="logo">Milo Etz</Link>
          <nav className="nav">
            <Link to="/">home</Link>
            <Link to="/portfolio">work</Link>
            <Link to="/contact">contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectSlug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 milo etz.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
