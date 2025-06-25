import { io, Socket } from 'socket.io-client';

// TODO: use env vars for client & server urls
export const socket: Socket<ServerEvents, ClientEvents> = io(
  'http://localhost:3000',
);
