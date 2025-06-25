import { observable } from 'mobx';

export const Store = observable({
  rectangles: {} as RectangleEntries,

  sync(rectangles: RectangleEntries) {
    this.rectangles = rectangles;
  },

  add(rectangle: RectangleEntry) {
    this.rectangles[rectangle.id] = rectangle;
  },

  move(rectangle: RectangleEntry) {
    this.rectangles[rectangle.id] = rectangle;
  },

  get(id: string): RectangleEntry {
    return this.rectangles[id];
  },

  keys(): string[] {
    return Object.keys(this.rectangles);
  },
});
