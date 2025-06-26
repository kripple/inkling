import { observable } from 'mobx';

export const Store = observable({
  rectangles: {} as RectangleEntries,
  error: undefined as string | undefined,

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

  count(): number {
    return this.keys().length;
  },

  reset() {
    this.rectangles = {};
    this.error = undefined;
  },

  getError(): string | undefined {
    return this.error;
  },

  setError(message: string) {
    this.error = message;
  },
});
