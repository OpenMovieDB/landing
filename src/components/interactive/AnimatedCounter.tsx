import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to }: AnimatedCounterProps) {
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
}
