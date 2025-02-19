import React, { useEffect, useRef, useState } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};

const SplashCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useMousePosition();

  useEffect(() => {
    if (!cursorRef.current) return;

    const splash = () => {
      if (!cursorRef.current || position.x === null || position.y === null) return;
      
      const splash = document.createElement('div');
      splash.className = 'splash';
      splash.style.left = `${position.x}px`;
      splash.style.top = `${position.y}px`;
      
      cursorRef.current.appendChild(splash);

      setTimeout(() => {
        if (splash && cursorRef.current?.contains(splash)) {
          cursorRef.current.removeChild(splash);
        }
      }, 1000);
    };

    window.addEventListener('click', splash);
    return () => window.removeEventListener('click', splash);
  }, [position.x, position.y]);

  return (
    <>
      <style>
        {`
          .splash {
            position: fixed;
            pointer-events: none;
            width: 100px;
            height: 100px;
            background: conic-gradient(
              from 0deg,
              #ff0000,
              #ff8000,
              #ffff00,
              #00ff00,
              #00ffff,
              #0000ff,
              #8000ff,
              #ff0080,
              #ff0000
            );
            border-radius: 50%;
            animation: splash 1s ease-out forwards, rotate 2s linear infinite;
            z-index: 9999;
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
          }

          @keyframes splash {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(3);
              opacity: 0;
            }
          }

          @keyframes rotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          .cursor {
            width: 20px;
            height: 20px;
            background: conic-gradient(
              from 0deg,
              #ff0000,
              #ff8000,
              #ffff00,
              #00ff00,
              #00ffff,
              #0000ff,
              #8000ff,
              #ff0080,
              #ff0000
            );
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease;
            mix-blend-mode: screen;
          }
        `}
      </style>
      <div ref={cursorRef} />
      <div 
        className="cursor"
        style={{ 
          left: position.x ? `${position.x}px` : '-100px',
          top: position.y ? `${position.y}px` : '-100px'
        }} 
      />
    </>
  );
};

export default SplashCursor;