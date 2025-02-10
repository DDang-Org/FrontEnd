import { useEffect, useState } from 'react';

export const useInitializeMsw = () => {
  const [isMswEnabled, setIsMswEnabled] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      if (!__DEV__) {
        return;
      }
      await import('../../msw.polyfills');
      const { server } = await import('../mocks/server.js');
      server.listen({ onUnhandledRequest: 'warn' });
      setIsMswEnabled(true);
    }
    enableMocking();
  }, []);

  return { isMswEnabled };
};
