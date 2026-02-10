import { motion, useScroll, useTransform, useSpring, animate, useMotionValue, useInView } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef, useEffect } from 'react';

interface StatItem {
  sum: number;
  unit: string;
  name: string;
  images: string[];
  imageSize: { width: number; height: number };
}

const STAT_ITEMS: StatItem[] = [
  {
    sum: 1,
    unit: 'миллион',
    name: 'фильмов',
    images: [1306638, 4491001, 4647040, 4540126, 478052, 1219177].map((i) => `/img/films/${i}.png`),
    imageSize: { width: 523, height: 294 },
  },
  {
    sum: 6,
    unit: 'миллионов',
    name: 'персон',
    images: [3, 6, 4, 2, 1, 5].map((i) => `/img/persons/${i}.png`),
    imageSize: { width: 367, height: 490 },
  },
  {
    sum: 3,
    unit: 'миллиона',
    name: 'изображений',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/photos/${i}.png`),
    imageSize: { width: 523, height: 294 },
  },
];

const imagePositions = (slideIndex: number, frameIndex: number) => {
  const positions = [
    [
      'translate(313%, 119%)',
      'translate(9%, 263%)',
      'translate(171%, 469%)',
      'translate(98%, 720%)',
      'translate(236%, 1140%)',
      'translate(-21%, 1056%)',
    ],
    [
      'translate(324%, 12%)',
      'translate(-11%, 31%)',
      'translate(174%, 153%)',
      'translate(353%, 305%)',
      'translate(39%, 504%)',
      'translate(385%, 672%)',
    ],
    [
      'translate(-23%, 22%)',
      'translate(229%, 23%)',
      'translate(42%, 318%)',
      'translate(145%, 663%)',
      'translate(-11%, 1003%)',
      'translate(277%, 1374%)',
    ],
  ];
  return positions[slideIndex][frameIndex];
};

const imagesSlidePositions = (index: number) => {
  const positions = ['translateY(-57vh)', 'translateY(51vh)', 'translateY(84vh)'];
  return positions[index];
};

function useParallaxEffect(velocity: number) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, (value) => -value * velocity);
  const smoothTranslateY = useSpring(translateY, { stiffness: 100, damping: 20 });
  return smoothTranslateY;
}

function ParallaxCard({ children, velocity }: { children: ReactNode; velocity: number }) {
  const y = useParallaxEffect(velocity);
  return (
    <motion.div style={{ y, position: 'relative', zIndex: 1 }}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ from, to }: { from: number; to: number }) {
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

function SlideContent({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="stats-slide" ref={ref}>
      <motion.div className="stats-title-wrap" style={{ opacity }}>
        <h3 className="stats-title">
          <AnimatedCounter from={stat.sum} to={stat.sum} />
          <span className="stats-unit">{stat.unit}</span>
          {stat.name}
        </h3>
      </motion.div>
      <div style={{ transform: imagesSlidePositions(index) }}>
        {stat.images.map((url, frameIndex) => (
          <ParallaxCard key={frameIndex} velocity={frameIndex === 0 ? 0.3 : 0.1 * (frameIndex + 1)}>
            <div className="stats-image-frame" style={{ transform: imagePositions(index, frameIndex) }}>
              <img
                className="stats-image"
                src={url}
                width={stat.imageSize.width}
                height={stat.imageSize.height}
                alt=""
              />
            </div>
          </ParallaxCard>
        ))}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="stats-wrap">
      <div className="stats-slides">
        {STAT_ITEMS.map((stat, index) => (
          <SlideContent key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
}
