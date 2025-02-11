import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsInByb3ZpZGVyIjoiS0FLQU8iLCJleHAiOjE3Mzk3NjQwMDIsImVtYWlsIjoibWtoNjc5M0BuYXZlci5jb20ifQ.EF03NpevMSZ2DcM5Q-trEEmRa0KEb5HpJ1HlD-Vj8xy3N2JoFvdQFoWDJRM3IGVwx58L9T2oV7GBTr6wJOevnA';

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

  const subscribe = (destination: string, callback: (message: IMessage) => void) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      return stompClientRef.current.subscribe(destination, callback);
    }
  };

  return { client: stompClientRef.current, sendMessage, subscribe };
};
