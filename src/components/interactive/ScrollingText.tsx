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

interface ScrollingTextProps {
  text: string;
  baseVelocity?: number;
}

export default function ScrollingText({ text, baseVelocity = -2 }: ScrollingTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="scrolling-text">
      <motion.div className="scrolling-text__inner" style={{ x }}>
        {[0, 1, 2, 3].map((i) => (
          <p key={i} className="gradient-title">
            {text}{' '}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
