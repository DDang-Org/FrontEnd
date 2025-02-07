import { Client } from '@stomp/stompjs';
import { createContext, useContext, PropsWithChildren } from 'react';

type WebSocketContextType = {
  client: Client | null;
  sendMessage: (destination: string, body: any) => void;
};

const WebSocketContext = createContext<WebSocketContextType>({
  client: null,
  sendMessage: () => {}, // 기본 빈 함수
});

type WebSocketProviderProps = {
  client: Client | null;
  sendMessage: (destination: string, body: any) => void;
};

export const WebSocketProvider = ({ children, client, sendMessage }: PropsWithChildren<WebSocketProviderProps>) => {
  return <WebSocketContext.Provider value={{ client, sendMessage }}>{children}</WebSocketContext.Provider>;
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};
