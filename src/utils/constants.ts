export const CANVAS = {
  INITIAL_CIRCLE: {
    X_RATIO: 0.15,
    Y_RATIO: 0.23,
    RADIUS: 100,
  },
  DRAWING: {
    CIRCLE_RADIUS: 90,
    MOVEMENT_DIVISOR: 10,
  },
  COLORS: {
    BACKGROUND: '#5c6843',
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
    TITLE_BG_COLOR: '#e30aa8',
  },
} as const; 