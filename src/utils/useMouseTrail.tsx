import { useEffect, useRef, useState } from 'react';
import { MOUSE_TRAIL } from './constants';

interface Point {
  x: number;
  y: number;
}

interface Path {
  d: string;
  opacity: number;
  strokeWidth: number;
}

export default function useMouseTrail() {
  const [smoothPointer, setSmoothPointer] = useState<Point>({ x: 0, y: 0 });
  const [paths, setPaths] = useState<Path[]>([]);
  const currentPointsRef = useRef<Point[]>([]);
  const lastUpdateTimeRef = useRef(0);

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
    let animationFrameId: number;

    const updatePath = (timestamp: number) => {
      if (
        timestamp - lastUpdateTimeRef.current >=
        MOUSE_TRAIL.UPDATE_INTERVAL
      ) {
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
                opacity: MOUSE_TRAIL.OPACITY,
                strokeWidth: MOUSE_TRAIL.STROKE_WIDTH,
              },
            ];
            return newPaths.slice(-MOUSE_TRAIL.MAX_PATHS);
          });
        }

        if (currentPointsRef.current.length > MOUSE_TRAIL.MAX_POINTS) {
          currentPointsRef.current = currentPointsRef.current.slice(
            -MOUSE_TRAIL.MAX_POINTS
          );
        }

        lastUpdateTimeRef.current = timestamp;
      }

      animationFrameId = requestAnimationFrame(updatePath);
    };

    animationFrameId = requestAnimationFrame(updatePath);
    return () => cancelAnimationFrame(animationFrameId);
  }, [smoothPointer]);

  return { paths };
}
