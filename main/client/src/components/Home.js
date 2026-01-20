import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './component-css/Home.css';

function Home() {
    const skills = [
        'JavaScript', 'TypeScript', 'React', 'Python', 'C++',
        'HTML/CSS', 'Figma', 'Git', 'SQL', 'Node.js'
    ];

    const currentProjects = [
        {
            name: 'Personal Portfolio',
            description: 'This site you\'re looking at right now.',
            link: null
        }
    ];

    const colors = ['#cc4444', '#2f4893', '#235223', '#bc8b11'];
    const [letterColors, setLetterColors] = useState(['', '', '', '']);

    const handleLetterHover = (index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setLetterColors(prev => {
            const newColors = [...prev];
            newColors[index] = randomColor;
            return newColors;
        });

        setTimeout(() => {
            setLetterColors(prev => {
                const resetColors = [...prev];
                resetColors[index] = '';
                return resetColors;
            });
        }, 1500);
    };

    return (
        <div className="home">
            <section className="hero">
                <h1>
                    <span
                        className="letter"
                        style={{ color: letterColors[0] }}
                        onMouseEnter={() => handleLetterHover(0)}
                    >
                        M
                    </span>
                    <span
                        className="letter"
                        style={{ color: letterColors[1] }}
                        onMouseEnter={() => handleLetterHover(1)}
                    >
                        i
                    </span>
                    <span
                        className="letter"
                        style={{ color: letterColors[2] }}
                        onMouseEnter={() => handleLetterHover(2)}
                    >
                        l
                    </span>
                    <span
                        className="letter"
                        style={{ color: letterColors[3] }}
                        onMouseEnter={() => handleLetterHover(3)}
                    >
                        o
                    </span>{' '}Etz
                </h1>
                <p>Designer & developer based in the United States.</p>
            </section>

            <section className="section">
                <h2>About.</h2>
                <div className="section-content">
                    <p>
                        I'm a developer and designer based in the United States. I studied computer science with a minor in design, making things that are both functional and beautiful.
                    </p>
                    <p>
                        When I'm not coding, I'm probably running or working on some art project.
                    </p>
                </div>
            </section>

            <section className="section">
                <h2>Current Work.</h2>
                <div className="section-content">
                    {currentProjects.map((project, i) => (
                        <div key={i} className="current-item">
                            <div className="current-header">
                                <span className="current-name">{project.name}</span>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link">
                                        ↗
                                    </a>
                                )}
                            </div>
                            <p className="current-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2>Stack.</h2>
                <div className="section-content">
                    <div className="skills-grid">
                        {skills.map((skill, i) => (
                            <span key={i} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Selected Work</h2>
                <div className="section-content">
                    <div className="work-grid">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/portfolio/${project.slug}`}
                                className="work-item"
                            >
                                <img src={project.thumbnail} alt={project.title} />
                                <div className="work-info">
                                    <span className="work-title">{project.title}</span>
                                    <span className="work-year">{project.year}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
