import { useEffect, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWindowSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setWindowSize({ width, height });
      };

      updateWindowSize();
      window.addEventListener('resize', updateWindowSize);
      return () => window.removeEventListener('resize', updateWindowSize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
