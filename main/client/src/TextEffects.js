import React from 'react';
import './TextEffects.css';

const WiggleText = ({ text }) => {
    return (
        <span className="wiggle-text">
            {text.split('').map((char, index) => (
                <span key={index} className="wiggle-letter" style={{ '--wiggle-index': index }}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default WiggleText;