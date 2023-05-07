import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

import { useParallaxEffect } from '../../hooks/useParallaxEffect';

interface ParallaxCardProps {
  children: ReactNode;
  velocity: number;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ children, velocity }) => {
  const { translateY } = useParallaxEffect(velocity);

  return (
    <motion.div
      style={{
        y: translateY,
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxCard;
