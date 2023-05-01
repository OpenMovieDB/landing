import type { MotionValue } from 'framer-motion';
import { motion, useSpring } from 'framer-motion';
import styled from 'styled-components';

import { useMobileDevice } from '../../hooks/useMobileDevice';

const ConnectorsSvg = styled.svg`
  mask-image: linear-gradient(
    0deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 11.98%,
    #d9d9d9 88.02%,
    rgba(217, 217, 217, 0.0104167) 100%
  );
`;

const ConnectorPath = ({ d, scale }: { d: string; scale: MotionValue }) => (
  <motion.path
    d={d}
    stroke='white'
    strokeOpacity='0.1'
    strokeWidth='2'
    initial={{ pathLength: 0 }}
    pathLength={scale}
  />
);

const Connectors = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const mobilePaths = [
    'M148.053 0L148.053 234.624C148.053 240.147 152.53 244.624 158.053 244.624L270.157 244.624C275.68 244.624 280.157 249.101 280.157 254.624L280.157 297.137',
    'M123.362 0.584595L123.362 233.856C123.362 239.378 118.885 243.855 113.362 243.855L11.0002 243.855C5.47734 243.855 1.00018 248.333 1.00018 253.855L1.00018 297.137',
    'M139.156 0.389771L139.156 297.137',
    'M131.259 0.389771L131.259 240.003C131.259 245.526 126.782 250.003 121.259 250.003L85.5333 250.003C80.0105 250.003 75.5334 254.481 75.5334 260.003L75.5334 297.137',
  ];

  const desktopPaths = [
    'M345 0.5L345 613.243C345 621.527 351.716 628.243 360 628.243L669 628.243C677.284 628.243 684 634.959 684 643.243L684 763',
    'M315 2L315 611.27C315 619.555 308.284 626.271 300 626.271L16 626.27C7.71569 626.27 0.999972 632.986 0.999972 641.27L0.999967 763',
    'M335 1.5L335 763',
    'M325 1.5L325 627.047C325 635.331 318.284 642.047 310 642.047L197 642.047C188.716 642.047 182 648.763 182 657.047L182 763',
  ];

  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const isMobile = useMobileDevice();
  const [width, height] = isMobile ? [282, 298] : [685, 763];
  const paths = isMobile ? mobilePaths : desktopPaths;

  return (
    <ConnectorsSvg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {paths.map((path) => (
        <ConnectorPath d={path} scale={scale} key={path} />
      ))}
    </ConnectorsSvg>
  );
};

export default Connectors;
