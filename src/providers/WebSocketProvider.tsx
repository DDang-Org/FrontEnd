import { Client } from '@stomp/stompjs';
import { createContext, useContext, PropsWithChildren } from 'react';
import { useWebSocket } from '~hooks/useWebSocket';

type WebSocketContextType = {
  client: Client | null;
  sendMessage: (destination: string, body: any) => void;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider = ({ children }: PropsWithChildren) => {
  const { client, sendMessage } = useWebSocket();

  return <WebSocketContext.Provider value={{ client, sendMessage }}>{children}</WebSocketContext.Provider>;
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};
