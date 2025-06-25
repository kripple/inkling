import { observable } from 'mobx';
import { socket } from './socket';

export const Rectangle = observable({
  rectangles: {} as RectangleEntries,

  sync(rectangles: RectangleEntries) {
    this.rectangles = rectangles;
  },

  list(): RectangleEntries {
    return this.rectangles;
  },

  add(position: Position) {
    socket.emit('rectangle:add', position);
  },

  move(rectangle: RectangleEntry) {
    socket.emit('rectangle:move', rectangle);
  },
});
