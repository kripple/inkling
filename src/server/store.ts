import { observable } from 'mobx';
import { max } from '../config';

export const Rectangle = observable({
  rectangles: {} as RectangleEntries,
  currentId: 0,
  max,

  count(): number {
    return Object.keys(this.rectangles).length;
  },

  list(): RectangleEntries {
    return this.rectangles;
  },

  create(rectangle: Omit<RectangleEntry, 'id'>) {
    const id = (this.currentId++).toString();
    const draft = { ...rectangle, id };
    this.rectangles[id] = draft;
    return draft;
  },

  update(rectangle: RectangleEntry) {
    this.rectangles[rectangle.id] = rectangle;
  },

  reset() {
    this.rectangles = {};
  },
});
