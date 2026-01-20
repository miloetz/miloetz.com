import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // Don't run on mobile/touch devices
    if ('ontouchstart' in window) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current.forEach((point, i) => {
        const opacity = 1 - (point.age / 25);
        const size = 2 + (i * 0.2);

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(164, 164, 164, ${opacity * 0.3})`;
        ctx.fill();

        point.age++;
      });

      trailRef.current = trailRef.current.filter(p => p.age < 25);
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
};

export default CursorTrail;
