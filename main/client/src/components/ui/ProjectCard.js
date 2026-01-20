import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isVideo = project.videoEmbed;
  const isGif = project.thumbnail?.toLowerCase().endsWith('.gif');

  return (
    <article
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="project-card-image-wrapper"
        onClick={() => !isVideo && onImageClick(project)}
      >
        {isVideo ? (
          <div className="project-card-video-thumb">
            <img
              src={project.thumbnail}
              alt={project.title}
              className={isHovered ? 'hovered' : ''}
            />
            <span className="play-icon">&#9658;</span>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className={isHovered ? 'hovered' : ''}
          />
        )}
        <div className={`project-card-overlay ${isHovered ? 'visible' : ''}`}>
          <span className="view-text">{isVideo ? 'watch' : 'view'}</span>
        </div>
      </div>
      <div className="project-card-info">
        <h3>{project.title}</h3>
        <p className="project-category">
          {project.category.join(' / ')}
        </p>
        <Link to={`/portfolio/${project.slug}`} className="case-study-link">
          read more
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
