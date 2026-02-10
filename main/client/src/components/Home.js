import React, { useState, useEffect } from 'react';
import './component-css/Home.css';

function Home() {
    const [githubRepos, setGithubRepos] = useState([]);
    const [loadingRepos, setLoadingRepos] = useState(true);

    // Coding projects carousel state
    const [currentMediaType, setCurrentMediaType] = useState('video'); // 'video' or 'image'
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const codingProjects = [
        {
            id: 1,
            title: 'emrg-docs',
            description: 'A modern documentation platform with elegant design and seamless user experience.',
            darkVideo: 'https://i.imgur.com/K5PLAbS.mp4',
            lightVideo: 'https://i.imgur.com/pbv7jNX.mp4',
            darkImage: 'https://i.imgur.com/vsWWRes.jpeg',
            lightImage: 'https://i.imgur.com/UU1c2qR.jpeg',
            linkUrl: 'https://dev.joinemrg.com/'
        }
    ];

    const currentProject = codingProjects[0];

    const handlePrevMedia = () => {
        setCurrentMediaType((prev) => prev === 'video' ? 'image' : 'video');
    };

    const handleNextMedia = () => {
        setCurrentMediaType((prev) => prev === 'video' ? 'image' : 'video');
    };

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    useEffect(() => {
        fetch('https://api.github.com/users/miloetz/repos?sort=updated&per_page=6')
            .then(res => res.json())
            .then(data => {
                const repos = Array.isArray(data) ? data : [];
                setGithubRepos(repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
                setLoadingRepos(false);
            })
            .catch(() => setLoadingRepos(false));
    }, []);

    const skills = [
        'JavaScript', 'TypeScript', 'React', 'Python', 'C++',
        'HTML/CSS', 'Figma', 'Git', 'SQL', 'Node.js'
    ];


    const colors = ['#cc4444', '#2f4893', '#235223', '#bc8b11'];
    const [letterStyles, setLetterStyles] = useState(Array(7).fill({ color: '', rotation: 0 }));

    const handleLetterHover = (index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomRotation = Math.floor(Math.random() * 31) - 15; // Random rotation between -15 and +15 degrees
        setLetterStyles(prev => {
            const newStyles = [...prev];
            newStyles[index] = { color: randomColor, rotation: randomRotation };
            return newStyles;
        });

        setTimeout(() => {
            setLetterStyles(prev => {
                const resetStyles = [...prev];
                resetStyles[index] = { color: '', rotation: 0 };
                return resetStyles;
            });
        }, 1500);
    };

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[0].color,
                                transform: letterStyles[0].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[0].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(0)}
                        >
                            M
                        </span>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[1].color,
                                transform: letterStyles[1].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[1].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(1)}
                        >
                            i
                        </span>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[2].color,
                                transform: letterStyles[2].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[2].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(2)}
                        >
                            l
                        </span>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[3].color,
                                transform: letterStyles[3].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[3].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(3)}
                        >
                            o
                        </span>{' '}
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[4].color,
                                transform: letterStyles[4].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[4].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(4)}
                        >
                            E
                        </span>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[5].color,
                                transform: letterStyles[5].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[5].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(5)}
                        >
                            t
                        </span>
                        <span
                            className="letter"
                            style={{ 
                                color: letterStyles[6].color,
                                transform: letterStyles[6].rotation !== 0 ? `scale(1.6) rotate(${letterStyles[6].rotation}deg)` : undefined
                            }}
                            onMouseEnter={() => handleLetterHover(6)}
                        >
                            z
                        </span>
                    </h1>
                    <p>Designer & developer based in the United States.</p>
                </div>
            </section>

            <section className="section">
                <h2>About.</h2>
                <div className="section-content">
                    <p>
                        I'm a developer and designer based in the United States. I studied computer science with a minor in design, making things that are both functional and beautiful.
                    </p>
                    <p>
                        When I'm not coding, I'm probably running or making something.
                    </p>
                </div>
            </section>

            <section className="section">
                <h2>Current Work.</h2>
                <div className="section-content">
                    {loadingRepos ? (
                        <p className="loading-text">Loading...</p>
                    ) : githubRepos[0] && (
                        <div className="current-item">
                            <div className="current-header">
                                <span className="current-name">{githubRepos[0].name}</span>
                                <a href={githubRepos[0].html_url} target="_blank" rel="noopener noreferrer" className="external-link">
                                    ↗
                                </a>
                            </div>
                            <p className="current-description">{githubRepos[0].description || 'No description'}</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <h2>GitHub.</h2>
                <div className="section-content">
                    {loadingRepos ? (
                        <p className="loading-text">Loading repos...</p>
                    ) : (
                        <div className="github-grid">
                            {githubRepos.map(repo => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-card"
                                >
                                    <div className="github-card-header">
                                        <span className="github-repo-name">{repo.name}</span>
                                        {repo.language && (
                                            <span className="github-language" data-lang={repo.language.toLowerCase()}>
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    <p className="github-description">
                                        {repo.description || 'No description'}
                                    </p>
                                    <div className="github-stats">
                                        <span className="github-stat">
                                            <svg viewBox="0 0 16 16" width="14" height="14">
                                                <path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
                                            </svg>
                                            {repo.stargazers_count}
                                        </span>
                                        <span className="github-stat">
                                            <svg viewBox="0 0 16 16" width="14" height="14">
                                                <path fill="currentColor" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
                                            </svg>
                                            {repo.forks_count}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
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

            <section className="section section-coding">
                <h2>Coding Work</h2>
                <div className="section-content">
                    <div className="coding-pill">
                        <div className="coding-carousel">
                            <button 
                                className="carousel-nav carousel-prev" 
                                onClick={handlePrevMedia}
                                aria-label="Previous media"
                            >
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15,18 9,12 15,6"></polyline>
                                </svg>
                            </button>
                            
                            <div className="carousel-content">
                                <div className="carousel-media">
                                    {currentMediaType === 'video' ? (
                                        <video 
                                            key={`video-${isDarkTheme ? 'dark' : 'light'}`}
                                            autoPlay 
                                            muted 
                                            loop 
                                            playsInline
                                            className="carousel-video"
                                        >
                                            <source 
                                                src={isDarkTheme ? currentProject.darkVideo : currentProject.lightVideo} 
                                                type="video/mp4" 
                                            />
                                        </video>
                                    ) : (
                                        <img 
                                            key={`image-${isDarkTheme ? 'dark' : 'light'}`}
                                            src={isDarkTheme ? currentProject.darkImage : currentProject.lightImage}
                                            alt={`${currentProject.title} - ${isDarkTheme ? 'Dark' : 'Light'} theme`}
                                            className="carousel-image"
                                        />
                                    )}
                                </div>
                                
                                <button 
                                    className="theme-toggle" 
                                    onClick={toggleTheme}
                                    aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
                                >
                                    <span className="theme-label">{isDarkTheme ? 'dark' : 'light'}</span>
                                </button>
                                
                                <div className="carousel-info">
                                    <h3 className="carousel-title">
                                        <a 
                                            href={currentProject.linkUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            {currentProject.title}
                                            <span className="external-arrow"> ↗</span>
                                        </a>
                                    </h3>
                                    <p className="carousel-description">{currentProject.description}</p>
                                </div>
                            </div>
                            
                            <button 
                                className="carousel-nav carousel-next" 
                                onClick={handleNextMedia}
                                aria-label="Next media"
                            >
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9,18 15,12 9,6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
