/* eslint-disable no-bitwise */

import { useEffect, useRef } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

const noise = (ctx: CanvasRenderingContext2D) => {
  const { width, height } = ctx.canvas;
  const imageData = ctx.createImageData(width, height);
  const buffer32 = new Uint32Array(imageData.data.buffer);

  for (let i = 0; i < buffer32.length; ) {
    i += 1;
    buffer32[i] = ((255 * Math.random()) | 0) << 24;
  }

  ctx.putImageData(imageData, 0, 0);
};

const BackgroundNoise = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = canvas.current?.getContext('2d');
  const { height, width } = useWindowSize();

  useEffect(() => {
    if (ctx) noise(ctx);
  });

  return (
    <canvas
      ref={canvas}
      className="noise"
      width={width}
      height={height}
    ></canvas>
  );
};

export default BackgroundNoise;
