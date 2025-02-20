import { useRef } from 'react';

export const useThrottle = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const isThrottled = useRef(false);

  return (...args: Parameters<T>) => {
    if (isThrottled.current) return;

    console.log('클릭!!!');
    console.log('클릭!!!');
    console.log('클릭!!!');
    console.log('클릭!!!');
    callback(...args);
    isThrottled.current = true;

    setTimeout(() => {
      isThrottled.current = false;
    }, delay);
  };
};
