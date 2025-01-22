import React from 'react';
import './TextEffects.css';

const WiggleTextNav = ({ text }) => {
    return (
        <span className="wiggle-text-nav">
            {text.split('').map((char, index) => (
                <span key={index} className="wiggle-letter-nav" style={{ '--wiggle-index': index }}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default WiggleTextNav;