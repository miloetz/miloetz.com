import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './component-css/Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>work.</h1>
      <div className="portfolio-grid">
        {projects.map(project => (
          <Link
            key={project.id}
            to={`/portfolio/${project.slug}`}
            className="portfolio-item"
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className="portfolio-info">
              <span className="portfolio-title">{project.title}</span>
              <span className="portfolio-year">{project.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
