import { createContext, use, type ReactNode } from 'react';
import { socket } from './socket';
import { Rectangle } from './store';

const SocketContext = createContext(socket);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => use(SocketContext);

export function SocketProvider({ children }: { children: ReactNode }) {
  socket.on('connect', () => {
    console.log('[socket] connected');

    // Server should emit `rectangle:init` soon after
  });

  socket.on('rectangle:init', (data) => {
    Rectangle.sync(data);
  });

  socket.on('rectangle:add', (r) => {
    Rectangle.rectangles[r.id] = r;
  });

  socket.on('rectangle:move', (r) => {
    Rectangle.rectangles[r.id] = r;
  });

  return <SocketContext value={socket}>{children}</SocketContext>;
}
