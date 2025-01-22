import React from "react";
import "./TextShake.css";

const TextShake = ({ text }) => {
    return (
        <span className="text-shake">
            {text.split('').map((char, index) => (
                <span key={index} className="shake-letter" style={{ '--shake-index': index }}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default TextShake;