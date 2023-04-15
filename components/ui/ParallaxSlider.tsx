import { motion, useTransform, wrap } from 'framer-motion';
import styled from 'styled-components';
import { useParallaxScrolling } from '../../hooks/useParallaxScrolling';

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
  const { baseX } = useParallaxScrolling(baseVelocity);

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
