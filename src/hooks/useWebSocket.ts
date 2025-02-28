import { useEffect, useRef, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client, IMessage } from '@stomp/stompjs';
import { getAccessToken } from '~utils/controlAccessToken';
import { useUser } from '~apis/member/useUser';

const SERVER_URL = 'https://ddang.site/ws';

export const useWebSocket = () => {
  const stompClientRef = useRef<Client | null>(null);
  const [responseData, setResponseData] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const reconnectAttemptRef = useRef(0);

  const { email } = useUser();

  console.log('[WebSocket] User email:', email);

  // Token 가져오기
  useEffect(() => {
    const getToken = async () => {
      const Token = await getAccessToken();
      console.log('[WebSocket] Token retrieved:', Token ? 'Success' : 'Failed');
      setAccessToken(Token);
    };
    getToken();
  }, []);

  // WebSocket 연결 설정
  useEffect(() => {
    if (!accessToken || accessToken === 'none' || !email) {
      console.log('[WebSocket] Connection skipped - missing token or email');
      return;
    }

    console.log('[WebSocket] Setting up connection with token and email:', email);
    setConnectionStatus('connecting');

    const stompClient = new Client({
      webSocketFactory: () => new SockJS(SERVER_URL),
      reconnectDelay: 5000,
      debug: process.env.NODE_ENV === 'development' ? msg => console.log('[WebSocket Debug]', msg) : undefined,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    stompClient.onConnect = frame => {
      console.log('[WebSocket] Connection established:', frame?.command);
      setConnectionStatus('connected');
      reconnectAttemptRef.current = 0;

      // 이메일로 구독 - walk 응답 처리
      console.log(`[WebSocket] Subscribing to /sub/walk/${email}`);
      stompClient.subscribe(`/sub/walk/${email}`, message => {
        try {
          const response = JSON.parse(message.body);
          console.log('[WebSocket] Message received from /sub/walk:', response);

          // 응답 데이터 저장 및 처리
          setResponseData(prevData => {
            console.log('[WebSocket] Updating response data:', {
              previous: prevData,
              new: response,
            });
            return response;
          });
        } catch (error) {
          console.error('[WebSocket] Error parsing message:', error);
        }
      });
    };

    // 연결 오류 처리
    stompClient.onStompError = frame => {
      console.error('[WebSocket] Connection error:', frame.headers?.message);
      setConnectionStatus('disconnected');
      reconnectAttemptRef.current += 1;
    };

    stompClient.onWebSocketClose = () => {
      console.log('[WebSocket] Connection closed');
      setConnectionStatus('disconnected');
    };

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      console.log('[WebSocket] Cleaning up connection');
      if (stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, [accessToken, email]); // email과 accessToken 변경 시 재연결

  const sendMessage = (destination: string, body: string) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      console.log(`[WebSocket] Sending message to ${destination}:`, body);
      stompClientRef.current.publish({ destination, body });
      return true;
    } else {
      console.warn('[WebSocket] Cannot send message - not connected');
      return false;
    }
  };

  const subscribe = (destination: string, callback: (message: IMessage) => void) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      console.log(`[WebSocket] Subscribing to ${destination}`);
      return stompClientRef.current.subscribe(destination, callback);
    } else {
      console.warn('[WebSocket] Cannot subscribe - not connected');
      return undefined;
    }
  };

  return {
    client: stompClientRef.current,
    sendMessage,
    subscribe,
    responseData,
    connectionStatus,
  };
};
