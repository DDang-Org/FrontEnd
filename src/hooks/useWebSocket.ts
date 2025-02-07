import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useEffect, useRef } from 'react';

const SOCKET_URL = 'https://ddang.site/ws';

export const useWebSocket = () => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const connectWebSocket = async () => {
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA';

      const socket = new SockJS(SOCKET_URL);

      const client = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        connectionTimeout: 10000,

        connectHeaders: {
          Authorization: `Bearer ${token}`,
        },

        debug: msg => {
          console.log('STOMP:', msg);
        },

        onConnect: () => {
          console.log('웹소켓 연결 성공');
        },

        onStompError: frame => {
          console.error('STOMP 에러:', frame.body);
        },

        onWebSocketError: event => {
          console.error('웹소켓 에러:', event);
        },
      });

      clientRef.current = client;
      client.activate();
    };

    connectWebSocket();

    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
      }
    };
  }, []);

  // 메시지 전송 헬퍼 함수
  const sendMessage = (destination: string, body: any) => {
    if (clientRef.current?.connected) {
      clientRef.current.publish({
        destination,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } else {
      console.warn('웹소켓이 연결되어 있지 않습니다.');
    }
  };

  return {
    client: clientRef.current,
    sendMessage,
  };
};
