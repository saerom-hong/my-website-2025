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

export const initCanvas = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.fillStyle = CANVAS.COLORS.BACKGROUND;
  ctx.fillRect(0, 0, width, height);
  ctx.globalCompositeOperation = 'destination-out';

  const x = width * CANVAS.INITIAL_CIRCLE.X_RATIO;
  const y = height * CANVAS.INITIAL_CIRCLE.Y_RATIO;
  const radius = CANVAS.INITIAL_CIRCLE.RADIUS;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}; 