import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { Rectangle } from './store';

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
    if (Rectangle.count() >= Rectangle.max) {
      io.emit('rectangle:error', { message: 'too many rectangles' }); // broadcast to all
      return;
    }
    const rectangle = Rectangle.create({ ...data, socketId: socket.id });
    io.emit('rectangle:add', rectangle); // broadcast to all
  });

  socket.on('rectangle:move', (rectangle) => {
    Rectangle.update(rectangle);
    socket.broadcast.emit('rectangle:move', rectangle); // broadcast to others only
  });

  socket.on('rectangle:reset', () => {
    Rectangle.reset();
    io.emit('rectangle:reset'); // broadcast to all
  });
});

server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
