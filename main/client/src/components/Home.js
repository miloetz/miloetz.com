import React from "react";
import "./component-css/Home.css";
import TextShake from "../TextShake";

function Home() {
    return (
        <div className="home-container">
            <header>
                <img src="https://i.pinimg.com/280x280_RS/60/c0/cf/60c0cfaef408beff62443f332dffb4a5.jpg" alt="milo etz" />
                <div className="home-name">
                    <h1><TextShake text="Milo Etz" /></h1>
                </div>
                <h2>Computer Scientist | Designer | Problem Solver</h2>
                <p>Blending art, technology, and innovation to build meaningful solutions.</p>
            </header>
        </div>
    );
}

export default Home;