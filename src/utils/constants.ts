export const CANVAS = {
  INITIAL_CIRCLE: {
    X_RATIO: 0.15,
    Y_RATIO: 0.23,
    RADIUS: 100,
    BRUSH_PARTICLES: 25, // Number of overlapping circles for brush effect
    BRUSH_RANDOMNESS: 0.4, // Randomness factor (0-1) for organic shape
  },
  DRAWING: {
    CIRCLE_RADIUS: 90,
    MOVEMENT_DIVISOR: 10,
  },
  COLORS: {
    BACKGROUND: '#025525',
    OPACITY: 0.7,
  },
} as const;

export const MOUSE_TRAIL = {
  MAX_PATHS: 50,
  MAX_POINTS: 20,
  UPDATE_INTERVAL: 8,
  STROKE_WIDTH: 5,
  OPACITY: 0.15,
  STROKE_COLOR: '#1A733F',
} as const;

export const STYLES = {
  CONTACT: {
    HIGHLIGHT_COLOR: 'rgba(255, 75, 184, 0.5)',
    TITLE_BG_COLOR: '#e30aa8',
  },
} as const; 