import React, { useEffect, useCallback } from 'react';
import './Lightbox.css';

const Lightbox = ({ isOpen, image, title, onClose, onNext, onPrev, isGif }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && onNext) onNext();
    if (e.key === 'ArrowLeft' && onPrev) onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>x</button>
        <img src={image} alt={title} />
        {onPrev && (
          <button className="lightbox-nav prev" onClick={onPrev}>
            {'<'}
          </button>
        )}
        {onNext && (
          <button className="lightbox-nav next" onClick={onNext}>
            {'>'}
          </button>
        )}
        {title && <p className="lightbox-title">{title}</p>}
      </div>
    </div>
  );
};

export default Lightbox;
