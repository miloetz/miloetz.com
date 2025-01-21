import React from 'react';
import './component-css/Contact.css';

function Contact() {
    return (
        <div>
            <header>
                <section id="contact">
                    <h2>Let's Connect</h2>
                    <p>If you're interested in collaborating or just want to say hello, feel free to reach out!</p>
                    <main>
                        <ul>
                            <li>Email: <a href="mailto:miloetz@me.com">miloetz@me.com</a></li>
                            <li>GitHub: <a href="https://github.com/miloetz" target="_blank" rel="noreferrer">github.com/miloetz</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/miloetz" target="_blank" rel="noreferrer">linkedin.com/in/miloetz</a></li>
                        </ul>
                    </main>
                </section>
            </header>
        </div>
    );
}

export default Contact;