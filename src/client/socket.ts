import { io, Socket } from 'socket.io-client';
import { Store } from './store';

const socket: Socket<ServerEvents, ClientEvents> = io('http://localhost:3000');

socket.on('rectangle:init', (data) => {
  Store.sync(data);
});

socket.on('rectangle:add', (data) => {
  Store.add(data);
});

socket.on('rectangle:move', (data) => {
  Store.move(data);
});

socket.on('rectangle:reset', () => {
  Store.reset();
});

socket.on('rectangle:error', (data) => {
  Store.setError(data.message);
});

export { socket };
