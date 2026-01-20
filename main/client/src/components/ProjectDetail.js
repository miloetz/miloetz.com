import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import './component-css/ProjectDetail.css';

function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <div className="project-detail">
        <p>project not found.</p>
        <Link to="/portfolio" className="back-link">back to work.</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/portfolio" className="back-link">back to work.</Link>

      <header className="project-header">
        <h1>{project.title}.</h1>
        <p className="project-meta">{project.year}</p>
      </header>

      <section className="project-hero">
        {project.videoEmbed ? (
          <div className="video-wrapper">
            <iframe
              src={project.videoEmbed}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img src={project.images?.[0] || project.thumbnail} alt={project.title} />
        )}
      </section>

      {project.fullDescription && (
        <section className="project-description">
          <p>{project.fullDescription}</p>
        </section>
      )}

      {project.techUsed && project.techUsed.length > 0 && (
        <section className="project-tech">
          <h2>built with.</h2>
          <p className="tech-list">{project.techUsed.join(' / ')}</p>
        </section>
      )}

      {project.images && project.images.length > 1 && (
        <section className="project-gallery">
          {project.images.slice(1).map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 2}`} />
          ))}
        </section>
      )}

      {project.links && (project.links.live || project.links.github) && (
        <section className="project-links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              view live.
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              github.
            </a>
          )}
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
