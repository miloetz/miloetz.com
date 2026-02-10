import { useState, useRef, useEffect } from 'react';
import './component-css/Music.css';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  const links = [
    { label: 'spotify', href: 'https://open.spotify.com/artist/78Ff1tJFm2B9ILfRmkf5gR?si=6wWbKzrWR2O15frFurAmvQ' },
    { label: 'cocaina bride', href: 'https://open.spotify.com/track/5fUonwfrMeWgyPXqQlm2IA?si=c71bdfc207b04605' },
  ];

  const sendCommand = (command) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command }),
        '*'
      );
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendCommand('playVideo');
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange') {
            setIsPlaying(data.info === 1);
          }
        } catch (e) {
          // Ignore non-JSON messages
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="music">
      <h1>meelo</h1>
      
      <div className="track-display">
        <button 
          className="play-button" 
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="2" />
              <rect x="14" y="4" width="4" height="16" rx="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
            </svg>
          )}
        </button>
      </div>
      
      <div className="player-wrapper">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/PbiOBB_Btu4?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1"
          title="cocaína bride"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className="music-links">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="music-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Music;
