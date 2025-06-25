declare type Position = {
  x: number;
  y: number;
};

declare type RectangleEntry = Position & {
  id: string;
  socketId: string;
};

declare type RectangleEntries = { [id: string]: RectangleEntry };
