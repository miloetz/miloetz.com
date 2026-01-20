import React from 'react';
import './component-css/About.css';

function About() {
  const skills = [
    'javascript', 'typescript', 'react', 'python', 'c++',
    'html/css', 'figma', 'git', 'sql', 'node.js'
  ];

  return (
    <div className="about">
      <section className="about-intro">
        <h1>about.</h1>
        <p className="bio">
          i'm a developer and designer based in the us. i studied computer science
          with a minor in design, and i like making things that are both functional
          and nice to look at.
        </p>
        <p className="bio">
          when i'm not coding, i'm probably running or working on some art project.
        </p>
      </section>

      <section className="about-skills">
        <h2>skills.</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span key={i} className="skill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="about-currently">
        <h2>currently.</h2>
        <p>open to opportunities.</p>
      </section>
    </div>
  );
}

export default About;
