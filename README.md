# Inkling

A real-time, collaborative canvas app.

## Tech Specs

Frontend

- React.js + TypeScript
- Tailwind CSS
- MobX
- React Konva
- Socket.io-client

Backend

- Node.js/Deno/Bun + TypeScript
- Socket.io

## Features

1. Canvas Stage: Create a Konva stage (HTML5 Canvas) as the primary drawing surface
2. Rectangle Creation: Implement a control to dynamically add rectangles to the canvas
3. Drag & Drop: Enable draggable rectangles with real-time position updates
4. Multi-client Synchronization: Ensure all connected clients see changes in real-time

### Frontend

- Initialize a Konva Stage component
- Implement an "Add Rectangle" button that:
  - Creates a new rectangle on the canvas (Every click creates a new rect.)
  - Broadcasts the creation event via Socket.io
- Configure rectangles with drag functionality using Konva's `draggable` prop
- Implement `onDragMove` callback to emit position updates to the server
- Handle incoming socket events to sync rectangles from other clients
- Interactions should feel smooth & responsive

### Backend

- Set up a Socket.io server to manage client connections
- Handle the following events:
  - `rectangle:add` - Broadcast new rectangle creation to all connected clients
  - `rectangle:move` - Broadcast position updates (x, y coordinates) to other clients
- Maintain connection state and ensure proper event distribution
- Graceful handling of connection issues and edge cases
- Opening multiple browser tabs should demonstrate real-time synchronization
  - Adding rectangles in one tab should immediately appear in all other tabs
  - Dragging rectangles should show live position updates across all connected sessions
- Supports multiple concurrent users

## Development

```bash
npm install  # install dependencies
npm start    # run the server
npm run dev  # start the react app
```

## Testing

Add many rectangles - 

```TypeScript
const btn = document.getElementsByTagName('button')[0];
for (let i = 0; i < 1001; i++) { btn.click() }
```
