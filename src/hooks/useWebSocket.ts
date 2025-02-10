import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiR09PR0xFIiwiZXhwIjoxNzQwMjQ4MjA3LCJlbWFpbCI6ImJibGJibGFuNjlAZ21haWwuY29tIn0.CpauBw9_yXlYQjr-BZP7xqm1u63pj1g1aM3kX9HwCm37BMhpOQGz1Mq8R42CihtC8henTRy0OHaxa7q9-1Svzw';

const SERVER_URL = 'https://ddang.site/ws';

export const useWebSocket = () => {
  const stompClientRef = useRef<Client | null>(null);

  useEffect(() => {
    const stompClient = new Client({
      webSocketFactory: () => new SockJS(SERVER_URL),
      reconnectDelay: 5000,
      debug: msg => console.log(msg),
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    stompClient.onConnect = frame => {
      console.log('STOMP 연결 성공:', frame);

      // 메시지 구독 예제
      // stompClient.subscribe('/sub/walk/bblbblan69@gmail.com', message => {
      //   console.log('받은 메시지:', message.body);
      // });
    };

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const sendMessage = (destination: string, body: string) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.publish({ destination, body });
    }
  };

  return { client: stompClientRef.current, sendMessage };
};
