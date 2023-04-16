import { motion, useTransform, wrap } from 'framer-motion';
import styled from 'styled-components';

import GradientTitle from './GradientTitle';
import { useParallaxScrolling } from '../../hooks/useParallaxScrolling';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const Parallax = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

const Scroller = styled(motion.div)`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const ParallaxTitles = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const { baseX } = useParallaxScrolling(baseVelocity);

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <Parallax>
      <Scroller style={{ x }}>
        <GradientTitle>{children} </GradientTitle>
        <GradientTitle>{children} </GradientTitle>
        <GradientTitle>{children} </GradientTitle>
        <GradientTitle>{children} </GradientTitle>
      </Scroller>
    </Parallax>
  );
};

export default ParallaxTitles;
