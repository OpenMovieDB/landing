import { createGlobalStyle } from 'styled-components';

import { COLORS } from './theme';

const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @font-face {
    font-family: "ppmi";
    src: url("/fonts/PPNeueMachina-InktrapRegular.eot");
    src: url("/fonts/PPNeueMachina-InktrapRegular.eot?#iefix") format("embedded-opentype"), url("/fonts/PPNeueMachina-InktrapRegular.woff2") format("woff2"), url("/fonts/PPNeueMachina-InktrapRegular.woff") format("woff"), url("/fonts/PPNeueMachina-InktrapRegular.ttf") format("truetype"), url("/fonts/PPNeueMachina-InktrapRegular.otf") format("otf");
    font-weight: 400;
  }

  @font-face {
    font-family: "ppmp";
    src: url("/fonts/PPNeueMachina-PlainRegular.eot");
    src: url("/fonts/PPNeueMachina-PlainRegular.eot?#iefix") format("embedded-opentype"), url("/fonts/PPNeueMachina-PlainRegular.woff2") format("woff2"), url("/fonts/PPNeueMachina-PlainRegular.woff") format("woff"), url("/fonts/PPNeueMachina-PlainRegular.ttf") format("truetype"), url("/fonts/PPNeueMachina-PlainRegular.otf") format("otf");
    font-weight: 400;
  }

  @font-face {
    font-family: "ppmi";
    src: url("/fonts/PPNeueMachina-InktrapUltrabold.eot");
    src: url("/fonts/PPNeueMachina-InktrapUltrabold.eot?#iefix") format("embedded-opentype"), url("/fonts/PPNeueMachina-InktrapUltrabold.woff2") format("woff2"), url("/fonts/PPNeueMachina-InktrapUltrabold.woff") format("woff"), url("/fonts/PPNeueMachina-InktrapUltrabold.ttf") format("truetype"), url("/fonts/PPNeueMachina-InktrapUltrabold.otf") format("otf");
    font-weight: 800;
  }

  * {
    box-sizing: border-box;
  }

  html.has-scroll-smooth {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
  }

  a,
  button,
  p,
  span,
  b,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  .tariffs-item__overlay {
    position: relative;
    z-index: 3;
  }

  body {
    margin: 0;
    padding: 0 0 100px;
    background: ${COLORS.dark};
    color: ${COLORS.light};
    overflow-x: hidden;
    font-family: "ppmi", sans-serif;
  }

  h1 {
    font-size: 96px;
    line-height: 98px;
    font-weight: 800;
  }
  
  h2 {
    font-size: 64px;
    line-height: 66px;
    font-weight: 800;
  }
  
  h3 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 800;
  }
`;

export default GlobalStyles;
