import { useEffect, useState } from 'react';

import { isMobileDevice } from '../utils/detectMobileDevice';

export const useMobileDevice = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return isMobile;
};
