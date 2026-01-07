import { CANVAS } from './constants';

// linear interpolation between two values
export const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number
) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 5 * Math.PI);
  ctx.fill();
};

// Draw a brush-like organic shape using multiple overlapping circles
const drawBrushStroke = (
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  baseRadius: number,
  particleCount: number,
  randomness: number
) => {
  for (let i = 0; i < particleCount; i++) {
    // Random offset from center (more particles near center, fewer at edges)
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * baseRadius * randomness;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    
    // Vary the radius for each circle (smaller circles create texture)
    const radiusVariation = 0.6 + Math.random() * 0.4; // 60-100% of base radius
    const radius = baseRadius * radiusVariation;
    
    // Draw overlapping circles
    ctx.beginPath();
    ctx.arc(
      centerX + offsetX,
      centerY + offsetY,
      radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
};

export const initCanvas = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.fillStyle = CANVAS.COLORS.BACKGROUND;
  ctx.globalAlpha = CANVAS.COLORS.OPACITY;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1; // Reset opacity so subsequent strokes render fully
  ctx.globalCompositeOperation = 'destination-out';

  const x = width * CANVAS.INITIAL_CIRCLE.X_RATIO;
  const y = height * CANVAS.INITIAL_CIRCLE.Y_RATIO;
  const radius = CANVAS.INITIAL_CIRCLE.RADIUS;

  // Use brush stroke instead of perfect circle
  drawBrushStroke(
    ctx,
    x,
    y,
    radius,
    CANVAS.INITIAL_CIRCLE.BRUSH_PARTICLES,
    CANVAS.INITIAL_CIRCLE.BRUSH_RANDOMNESS
  );
}; 