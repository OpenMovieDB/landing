import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

const Row = styled(motion.div)`
  overflow: hidden;
  width: auto;
`;

const ScrollerRow = styled(motion.div)`
  display: flex;
  width: max-content;

  gap: 30px;
  margin: 0 auto;
`;

const ParallaxSlider = ({ children, baseVelocity = 10 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <Row>
      <ScrollerRow style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </ScrollerRow>
    </Row>
  );
};

export default ParallaxSlider;
