import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { socket } from './socket';

const SocketContext = createContext(socket);

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return <SocketContext value={socket}>{children}</SocketContext>;
}
