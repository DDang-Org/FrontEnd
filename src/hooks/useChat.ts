import { Client } from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { getAccessToken } from '~utils/controlAccessToken';

const SERVER_URL = 'https://ddang.site/ws';

export const useChat = (email: string) => {
  const stompClientRef = useRef<Client | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const initializeWebSocket = async () => {
      const accessToken = await getAccessToken();
      const stompClient = new Client({
        webSocketFactory: () => new SockJS(SERVER_URL),
        reconnectDelay: 5000,
        debug: msg => console.log(msg),
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      stompClient.onConnect = () => {
        console.log('STOMP 연결 성공');
        console.log('WebSocket 연결 상태:', stompClientRef.current?.connected);

        stompClient.subscribe(`/sub/${email}`, message => {
          console.log(message.body);
          const receivedMessage = JSON.parse(message.body);
          console.log('받은 메시지', receivedMessage);
          setMessages(prevMessages => [receivedMessage, ...prevMessages]);
        });
      };

      stompClient.activate();
      stompClientRef.current = stompClient;

      return () => {
        stompClient.deactivate();
      };
    };

    initializeWebSocket();
  }, [email]);

  const sendMessage = (receiverEmail: string, text: string) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      const payload = JSON.stringify({ receiverEmail, message: text });
      console.log('payload', payload);
      stompClientRef.current.publish({
        destination: '/pub/api/v1/chat/message',
        body: payload,
      });
    }
  };

  return { messages, sendMessage };
};
