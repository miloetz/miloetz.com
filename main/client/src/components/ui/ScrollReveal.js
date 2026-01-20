import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ScrollReveal.css';

const ScrollReveal = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${direction} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
