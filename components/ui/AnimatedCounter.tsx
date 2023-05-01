import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, inView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedCounter;
