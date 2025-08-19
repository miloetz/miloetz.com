import React from 'react';
import './component-css/Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio-container">
            <header>
                <h1>Portfolio</h1>
                <img src="/assets/pictures/Milo_Etz_ShapeColorTexture.png" alt="Milo Etz Shape Color Texture" />
                <p>untitled</p>
                <img src="https://i.imgur.com/uADVDBT.gif" alt="Untitled Art" />
                <p>untitled</p>
            </header>
        </div>
    );
}

export default Portfolio;