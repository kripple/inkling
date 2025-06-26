declare type ServerEvents = {
  'rectangle:add': (rectangle: RectangleEntry) => void;
  'rectangle:move': (rectangle: RectangleEntry) => void;
  'rectangle:init': (rectangles: RectangleEntries) => void;
  'rectangle:reset': () => void;
  'rectangle:error': (error: { message: string }) => void;
};

declare type ClientEvents = {
  'rectangle:add': (position: Position) => void;
  'rectangle:move': (rectangle: RectangleEntry) => void;
  'rectangle:reset': () => void;
};
