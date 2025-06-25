declare type ServerEvents = {
  'ready': () => void;
  'rectangle:add': (rectangle: RectangleEntry) => void;
  'rectangle:move': (rectangle: RectangleEntry) => void;
  'rectangle:init': (rectangles: RectangleEntries) => void;
};

declare type ClientEvents = {
  'rectangle:add': (position: Position) => void;
  'rectangle:move': (rectangle: RectangleEntry) => void;
};
