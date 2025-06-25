import { io, Socket } from 'socket.io-client';
import { Store } from './store';

// TODO: use env vars for client & server urls
const socket: Socket<ServerEvents, ClientEvents> = io('http://localhost:3000');

socket.on('rectangle:init', (data) => {
  console.log('[socket] rectangle:init', data);
  Store.sync(data);
});

socket.on('rectangle:add', (data) => {
  console.log('[socket] rectangle:add', data);
  Store.add(data);
});

socket.on('rectangle:move', (data) => {
  console.log('[socket] rectangle:move', data);
  Store.move(data);
});

export { socket };
