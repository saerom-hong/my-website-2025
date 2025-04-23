'use client';
import React, { useEffect, useRef, useState } from 'react';

//TODO: refactoring and add actual href link

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
      className="flex flex-col justify-center items-center min-h-screen py-50 relative"
      style={{
        backgroundImage: "url('/background_image.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundImage: "url('/popup_image.avif')",
          inset: '0',
          width: '100%',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            className="trail"
            style={{
              stroke: '#F046AA',
              strokeWidth: path.strokeWidth,
              fill: 'none',
            }}
          />
        ))}
      </svg>
      <div className="relative z-10">
        <h3 className="text-[4.5vw] uppercase text-center max-w-[70vw] leading-none mb-20">
          Feel Free to reach me
        </h3>
        <ul className="flex justify-center items-center gap-8 text-[2.5vw]">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-block underline"
            >
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="currentColor"
              />
            </svg>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-block underline"
            >
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="currentColor"
              />
            </svg>
            <a href="mailto:your.email@example.com" className="underline">
              Email
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="inline-block underline"
            >
              <path
                d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                fill="currentColor"
              />
            </svg>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
