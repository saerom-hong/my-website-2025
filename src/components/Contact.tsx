'use client';
import React, { useEffect, useRef, useState } from 'react';
import ContactLink from './ContactLink';
import FooterText from './FooterText';

export default function Contact() {
  const [smoothPointer, setSmoothPointer] = useState({ x: 0, y: 0 });
  const [paths, setPaths] = useState<
    { d: string; opacity: number; strokeWidth: number }[]
  >([]);
  const currentPointsRef = useRef<{ x: number; y: number }[]>([]);
  const lastUpdateTimeRef = useRef(0);
  const MAX_PATHS = 50; // Maximum number of paths to keep

  useEffect(() => {
    setSmoothPointer({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    const handleMouseMove = (event: MouseEvent) => {
      setSmoothPointer({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateInterval = 8;
    let animationFrameId: number;

    const updatePath = (timestamp: number) => {
      if (timestamp - lastUpdateTimeRef.current >= updateInterval) {
        currentPointsRef.current.push({ ...smoothPointer });

        if (currentPointsRef.current.length > 1) {
          const d = currentPointsRef.current.reduce((acc, point, i) => {
            if (i === 0) return `M ${point.x} ${point.y}`;
            return `${acc} L ${point.x} ${point.y}`;
          }, '');

          setPaths((prev) => {
            const newPaths = [
              ...prev,
              {
                d,
                opacity: 0.15,
                strokeWidth: 5,
              },
            ];
            // Keep only the most recent MAX_PATHS paths
            return newPaths.slice(-MAX_PATHS);
          });
        }

        // Keep only the most recent points for the current path
        if (currentPointsRef.current.length > 20) {
          currentPointsRef.current = currentPointsRef.current.slice(-20);
        }

        lastUpdateTimeRef.current = timestamp;
      }

      animationFrameId = requestAnimationFrame(updatePath);
    };

    animationFrameId = requestAnimationFrame(updatePath);
    return () => cancelAnimationFrame(animationFrameId);
  }, [smoothPointer]);

  return (
    <div
      className="flex flex-col justify-around items-center h-screen relative"
      style={{
        backgroundImage: "url('/popup_image.avif')",
        inset: '0',
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <svg className="absolute z-10 top-0 left-0 w-full h-full pointer-events-none">
        {paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            className="trail"
            style={{
              stroke: '#1A733F',
              strokeWidth: path.strokeWidth,
              fill: 'none',
            }}
          />
        ))}
      </svg>
      <div className="relative flex flex-col items-center pt-50">
        <h3
          className="text-[5vw] font-bold uppercase text-center max-w-[70vw] leading-none"
          style={{ backgroundColor: '#e30aa8' }}
        >
          Contact Me
        </h3>
        <ul className="flex justify-center items-center gap-12 pt-48 pb-12 text-[2.5vw]">
          <ContactLink link="">CV</ContactLink>
          <ContactLink link="https://www.linkedin.com/in/hongsaerom/">
            LinkdIn
          </ContactLink>
          <ContactLink link="mailto:saeromhong12@gmail.com">Email</ContactLink>
          <ContactLink link="https://github.com/saerom-hong">
            GitHub
          </ContactLink>
        </ul>
        <FooterText />
      </div>
    </div>
  );
}
