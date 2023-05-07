import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import styled from 'styled-components';

import AnimatedCounter from '../ui/AnimatedCounter';
import ParallaxCard from '../ui/ParallaxCard';
import Title from '../ui/Title';

type StatItem = {
  sum: number;
  unit: string;
  name: string;
  images: string[];
  imageSize: {
    width: number;
    height: number;
  };
};

const STAT_ITEMS: StatItem[] = [
  {
    sum: 960,
    unit: 'тысяч',
    name: 'фильмов',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/films/${i}.png`),
    imageSize: {
      width: 523,
      height: 294,
    },
  },
  {
    sum: 6,
    unit: 'миллионов',
    name: 'персон',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/persons/${i}.png`),
    imageSize: {
      width: 367,
      height: 490,
    },
  },
  {
    sum: 3,
    unit: 'миллиона',
    name: 'изображений',
    images: [1, 2, 3, 4, 5, 6].map((i) => `/img/photos/${i}.png`),
    imageSize: {
      width: 523,
      height: 294,
    },
  },
];

const StatsSection = styled.section`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

const Slides = styled.div`
  position: relative;
`;

const Slide = styled.div`
  z-index: 1;
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  height: 200vh;

  @media (max-height: 900px) {
    height: 300vh;
  }

  @media (min-height: 1100px) {
    height: 200vh;
  }

  @media (min-height: 1500px) {
    height: 180vh;
  }

  @media (min-height: 2000px) {
    height: 140vh;
  }
`;

const StatsUnit = styled.span`
  background: linear-gradient(200deg, #0500ff, #710099);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  color: #06050f;
  font-weight: 800;
  font-size: 96px;
  line-height: 98px;
`;

const ImageFrame = styled.div`
  position: absolute;
`;

const StyledImage = styled(Image)`
  border-radius: 15px;
`;

const Counter = styled(AnimatedCounter)`
  background: linear-gradient(200deg, #0500ff, #710099);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  color: #06050f;
  font-weight: 800;
  font-size: 96px;
  line-height: 98px;
`;

const MotionTitleWrap = styled(motion.div)`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
`;

const ImagesWrap = styled.div``;

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

const SlideContent = ({ stat, index }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Slide key={index} ref={ref}>
      <MotionTitleWrap style={{ opacity }}>
        <Title>
          <Counter from={0} to={stat.sum} />
          <StatsUnit>{stat.unit}</StatsUnit>
          {stat.name}
        </Title>
      </MotionTitleWrap>
      <ImagesWrap style={{ transform: imagesSlidePositions(index) }}>
        {stat.images.map((url: string, frameIndex: number) => (
          <ParallaxCard key={frameIndex} velocity={frameIndex === 0 ? 0.3 : 0.1 * (frameIndex + 1)}>
            <ImageFrame style={{ transform: imagePositions(index, frameIndex) }}>
              <StyledImage src={url} width={stat.imageSize.width} height={stat.imageSize.height} alt='' />
            </ImageFrame>
          </ParallaxCard>
        ))}
      </ImagesWrap>
    </Slide>
  );
};

const Stats = () => {
  return (
    <StatsSection>
      <Slides>
        {STAT_ITEMS.map((stat, index) => (
          <SlideContent key={index} stat={stat} index={index} />
        ))}
      </Slides>
    </StatsSection>
  );
};

export default Stats;
