export const toPx = (value: number) => {
  return `${value}px`;
};

export const pxToVw = (px: number) => {
  const { clientWidth } = document!.documentElement;
  return `${(100 / clientWidth) * px}vw`;
};

export const pxToVh = (px: number) => {
  const { clientHeight } = document!.documentElement;
  return `${(100 / clientHeight) * px}vw`;
};
