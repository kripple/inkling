import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { Rectangle } from './store';

// TODO: enforce a max number of rectangles
// TODO: add reset/clear button to remove all rectangles

const port = 3000 as const;
const server = createServer();
const io = new Server<ClientEvents, ServerEvents>(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`connection established for client '${socket.id}'`);

  // Send current state to newly connected client
  socket.emit('rectangle:init', Rectangle.list());

  socket.on('rectangle:add', (data) => {
    console.log('rectangle:add');
    const rectangle = Rectangle.create({ ...data, socketId: socket.id });
    io.emit('rectangle:add', rectangle); // broadcast to all
  });

  socket.on('rectangle:move', (rectangle) => {
    console.log('rectangle:move');
    Rectangle.update(rectangle);
    socket.broadcast.emit('rectangle:move', rectangle); // broadcast to others only
  });

  socket.on('rectangle:reset', () => {
    console.log('rectangle:reset');
    Rectangle.reset();
    io.emit('rectangle:reset'); // broadcast to all
  });
});

server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
