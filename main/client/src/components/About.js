import React from 'react';
import './component-css/About.css';

function About() {
    return (
        <div className="about-container">
            <section id="about">
                <h2>About Me</h2>
                <p>
                    Hi, I’m Milo Etz—a creative technologist driven by curiosity, problem-solving, and a passion
                    for the intersection of art and technology. With a degree in Computer Science and a minor
                    in Design, I’ve spent my academic journey exploring how these two worlds collide to create
                    impactful, interactive experiences.
                </p>
                <p>
                    I’m particularly fascinated by the idea of art as a medium for interaction—something that
                    lets people see their impact on the world and connect in meaningful ways. My most
                    personal project to date was a CRT-based art installation, where I combined a thing from my
                    childhood that I loved with abstract video manipulation. It was an opportunity to not only
                    explore self-perception and motion but also bring together everything I’ve learned in
                    computer science and design.
                </p>
                <p>
                    When I’m not designing or coding, you can often find me running. For me, running is more
                    than a physical activity—it’s a mental reset. It’s where I clear my thoughts, find inspiration,
                    and brainstorm solutions to the challenges I’m working on.
                </p>
                <p>
                    Looking ahead, I see myself working for a design company where I can continue to blend
                    my technical skills and artistic vision. Whether it’s crafting intuitive digital experiences or
                    building tools that help others express themselves, I’m driven by the belief that technology
                    can be beautiful, impactful, and personal.
                </p>
            </section>
        </div>
    );
}

export default About;