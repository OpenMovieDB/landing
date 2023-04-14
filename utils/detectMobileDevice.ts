export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined' || !window.navigator.userAgent) {
    return false;
  }

  const { userAgent } = window.navigator;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
