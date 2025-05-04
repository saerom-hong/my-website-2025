'use client';
import React, { useEffect, useRef } from 'react';
import useWindow from '@/utils/useWindow';
import { lerp, drawCircle, initCanvas } from '@/utils/canvasUtils';
import { CANVAS } from '@/utils/constants';

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef<HTMLCanvasElement>(null);
  const prevPosition = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (dimension.width > 0 && canvas.current) {
      const ctx = canvas.current.getContext('2d');
      if (ctx) {
        initCanvas(ctx, dimension.width, dimension.height);
      }
    }
  }, [dimension]);

  const manageMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY, movementX, movementY } = e;
    const nbOfCircles =
      Math.max(Math.abs(movementX), Math.abs(movementY)) /
      CANVAS.DRAWING.MOVEMENT_DIVISOR;

    if (prevPosition.current && canvas.current) {
      const ctx = canvas.current.getContext('2d');
      if (!ctx) return;

      const { x, y } = prevPosition.current;
      for (let i = 0; i < nbOfCircles; i++) {
        const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
        drawCircle(ctx, targetX, targetY, CANVAS.DRAWING.CIRCLE_RADIUS);
      }
    }

    prevPosition.current = {
      x: clientX,
      y: clientY,
    };
  };

  return (
    <div className="relative w-full h-full">
      {dimension.width === 0 && (
        <div className="absolute w-full h-full bg-black" />
      )}
      <canvas
        ref={canvas}
        onMouseMove={manageMouseMove}
        height={dimension.height}
        width={dimension.width}
      />
    </div>
  );
}
