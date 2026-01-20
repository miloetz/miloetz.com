import React from 'react';
import './component-css/Contact.css';

function Contact() {
  const links = [
    { label: 'email', href: 'mailto:miloetz@me.com' },
    { label: 'github', href: 'https://github.com/miloetz' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/miloetz' }
  ];

  return (
    <div className="contact">
      <h1>contact.</h1>
      <p className="contact-text">let's work together.</p>
      <div className="contact-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {link.label}.
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
