import { useViewportScroll, useTransform, MotionValue, useSpring } from 'framer-motion';

interface ParallaxEffectValues {
  translateY: MotionValue<number>;
}

export const useParallaxEffect = (velocity: number): ParallaxEffectValues => {
  const { scrollY } = useViewportScroll();
  const translateY = useTransform(scrollY, (value) => -value * velocity);
  const smoothTranslateY = useSpring(translateY, { stiffness: 100, damping: 20 });

  return { translateY: smoothTranslateY };
};
