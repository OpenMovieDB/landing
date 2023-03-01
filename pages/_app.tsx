/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* @ts-nocheck */
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const allElements = document.querySelectorAll('*');

    function randomColor() {
      const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
      let color = '#';

      for (let i = 1; i <= 6; i++) {
        const rand = Math.round(Math.random() * (keys.length - 1));
        color += keys[rand];
      }
      return color;
    }
    function randomWidth() {
      const width = Math.round(
        Math.random() *
          ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].length - 1)
      );
      return width;
    }
    function randomSize() {
      const size = Math.round(Math.random() * ([1, 2, 3, 4, 5].length * 10));
      return size;
    }
    function setColors() {
      allElements.forEach((el: any) => {
        el.style.color = randomColor();
        el.style.fill = randomColor();
        el.style.stroke = randomColor();
        el.style.backgroundColor = randomColor();
        el.style.border = `${randomWidth()}px solid ${randomColor()}`;
        el.style.fontSize = `${randomSize()}px`;
        el.style.lineHeight = `${randomSize()}px`;
      });
    }
    setColors();
    setInterval(setColors, 1);
  }, []);

  return <Component {...pageProps} />;
}
