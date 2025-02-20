import { useRef } from 'react';

export const useThrottle = <T extends (...args: any[]) => void>(delay: number) => {
  const isThrottled = useRef(false);

  return (callback: T) =>
    (...args: Parameters<T>) => {
      if (isThrottled.current) return;

      callback(...args);
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    };
};
