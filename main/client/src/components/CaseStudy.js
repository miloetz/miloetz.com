import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCaseStudyBySlug } from '../data/caseStudies';
import './component-css/CaseStudy.css';

function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="case-study">
        <p>project not found.</p>
        <Link to="/" className="back-link">back home.</Link>
      </div>
    );
  }

  return (
    <article className="case-study">
      <Link to="/" className="back-link">back home.</Link>

      <header className="cs-header">
        <p className="cs-eyebrow">{study.role} · {study.period}</p>
        <h1>{study.title}.</h1>
        {study.tagline && <p className="cs-tagline">{study.tagline}</p>}
        <p className="cs-summary">{study.summary}</p>
        {study.links?.live && (
          <a href={study.links.live} target="_blank" rel="noopener noreferrer" className="cs-live-link">
            visit site<span className="external-arrow"> ↗</span>
          </a>
        )}
      </header>

      {study.hero && (
        <div className="cs-hero">
          <img src={study.hero} alt={study.title} />
        </div>
      )}

      {study.stats && (
        <dl className="cs-stats">
          {study.stats.map(stat => (
            <div key={stat.label} className="cs-stat">
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      )}

      {study.sections.map(section => (
        <section key={section.heading} className="cs-section">
          <h2>{section.heading}</h2>

          {section.body?.map((para, i) => (
            <p key={i} className="cs-body">{para}</p>
          ))}

          {section.items && (
            <ul className="cs-items">
              {section.items.map(item => (
                <li key={item.title} className="cs-item">
                  <div className="cs-item-head">
                    <h3>{item.title}</h3>
                    <span className="cs-item-when">{item.when}</span>
                  </div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          )}

          {section.figures && (
            <div className={`cs-figures ${section.layout === 'pair' ? 'cs-figures-pair' : ''}`}>
              {section.figures.map(fig => (
                <figure
                  key={fig.src}
                  className={`cs-figure ${fig.wide ? 'cs-figure-wide' : ''} ${fig.muted ? 'cs-figure-muted' : ''}`}
                >
                  <div className="cs-figure-frame">
                    <img src={fig.src} alt={fig.caption} />
                  </div>
                  <figcaption>{fig.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}

          {section.compare && (
            <div className="cs-compare">
              <div className="cs-compare-row cs-compare-head">
                <span>area</span>
                <span>before</span>
                <span>after</span>
              </div>
              {section.compare.map(row => (
                <div key={row.area} className="cs-compare-row">
                  <span className="cs-compare-area">{row.area}</span>
                  <span className="cs-compare-before">{row.before}</span>
                  <span className="cs-compare-after">{row.after}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {study.gallery && study.gallery.length > 0 && (
        <section className="cs-gallery">
          {study.gallery.map((img, i) => (
            <img key={i} src={img} alt={`${study.title} ${i + 1}`} />
          ))}
        </section>
      )}

      {study.stack && (
        <section className="cs-section">
          <h2>Built with.</h2>
          <div className="skills-grid">
            {study.stack.map(tool => (
              <span key={tool} className="skill-tag">{tool}</span>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default CaseStudy;
