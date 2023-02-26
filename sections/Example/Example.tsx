import { motion, MotionValue, useAnimation, useInView, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { GRADIENTS } from '../../styles/theme';

const data = {
  titles: [
    // На русском
    'САМАЯ БОЛЬШАЯ БАЗА ФИЛЬМОВ В МИРЕ',
    // На английском
    'THE LARGEST MOVIE DATABASE IN THE WORLD',
    // На китайском языке
    '世界上最大的电影数据库',
    // На японском языке
    '世界で最も大きな映画データベース',
    // На корейском языке
    '세계에서 가장 큰 영화 데이터베이스',
    // На испанском языке
    'LA BASE DE DATOS DE PELÍCULAS MÁS GRANDE DEL MUNDO',
    // На французском языке
    'LA PLUS GRANDE BASE DE DONNÉES DE FILMS AU MONDE',
  ],
  sources: [
    {
      name: 'TMDB',
      logo: '/img/icons/tmdb.png',
    },
    {
      name: 'JastWatch',
      logo: '/img/icons/jastwatch.png',
    },
    {
      name: 'IMDB',
      logo: '/img/icons/imdb.png',
    },
    {
      name: 'Rotten Tomatoes',
      logo: '/img/icons/rt.png',
    },
    {
      name: 'TVDB',
      logo: '/img/icons/tvdb.png',
    },
    {
      name: 'KinoPoisk',
      logo: '/img/icons/kp.png',
    },
  ],
  movie: {
    titles: ['Однажды в\nголливуде', 'Once Upon a Time...\nin Hollywood'],
    descriptions: [
      'В 1969 году в Лос-Анджелесе, где все еще великая эпоха голливудского кинематографа, снялся новый фильм. В главных ролях — звезда телевидения Рик Даллас и его дублер Брат Винсент. Вместе они пытаются подняться по карьерной лестнице, но в то же время сталкиваются с рядом проблем, связанных с современной жизнью.',
      'In 1969 Los Angeles, TV star Rick Dalton and his longtime stunt double Cliff Booth make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.',
    ],
    year: '2019',
    rating: '7.9',
    genres: ['Криминал', 'Драма', 'Комедия'],
    countries: ['США'],
    budget: '$90 000 000',
    awards: [
      {
        name: 'Golden Globe',
        logo: '/img/icons/golden-globe.png',
      },
    ],
    poster: '/img/posters/once-upon-a-time-in-hollywood.png',
    trailer: 'https://www.youtube.com/embed/zw81ihoukKU',
    actors: [
      {
        name: 'Леонардо\nДиКаприо',
        role: 'Rick Dalton',
        photo: '/img/persons/leonardo-dicaprio.png',
      },
      {
        name: 'Брэд\nПитт',
        role: 'Cliff Booth',
        photo: '/img/persons/brad-pitt.png',
      },
      {
        name: 'Марго\nРобби',
        role: 'Sharon Tate',
        photo: '/img/persons/margo-robbie.png',
      },
    ],
  },
};

const TitleContainer = styled.div``;

const Titles = styled.div`
  display: flex;
  gap: 100px;
  width: ${({ totalWidth }: { totalWidth: number }) => `calc(100% * ${totalWidth})`};
`;

const Title = styled.h2`
  background: ${GRADIENTS.primaryTitle};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SourcesContainer = styled.div`
  height: 860px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CircleContainer = styled.div`
  position: absolute;
`;

const Circle = ({ duration, cx, cy, r }: { duration: number; cx: string; cy: string; r: string }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r={r}
    stroke='white'
    strokeOpacity='0.1'
    strokeWidth='2'
    strokeLinecap='round'
    strokeDasharray='2 15'
    animate={{
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration,
      },
    }}
  />
);

const Circles = () => {
  return (
    <svg width='836' height='836' viewBox='0 0 836 836' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Circle cx='418' cy='418' r='262' duration={25} />
      <Circle cx='418' cy='418' r='417' duration={25} />
      <Circle cx='418' cy='418' r='167' duration={25} />
    </svg>
  );
};
const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #080715;
  border-radius: 200px;
  width: 212px;
  height: 212px;
`;

const LogoBackground = styled(Image)`
  position: absolute;
`;

const Logo = styled(Image)``;
const ConnectorsSvg = styled.svg`
  position: absolute;
  transform: translate(15px, 480px);
  mask-image: linear-gradient(
    0deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 11.98%,
    #d9d9d9 88.02%,
    rgba(217, 217, 217, 0.0104167) 100%
  );
`;

const ConnectorPath = ({ d, scale }: { d: string; scale: MotionValue }) => {
  return (
    <motion.path
      d={d}
      stroke='white'
      strokeOpacity='0.1'
      strokeWidth='2'
      initial={{ pathLength: 0 }}
      pathLength={scale}
    />
  );
};

const Connectors = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ConnectorsSvg width='685' height='763' viewBox='0 0 685 763' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <ConnectorPath
        d='M345 0.5L345 613.243C345 621.527 351.716 628.243 360 628.243L669 628.243C677.284 628.243 684 634.959 684 643.243L684 763'
        scale={scale}
      />
      <ConnectorPath
        d='M315 2L315 611.27C315 619.555 308.284 626.271 300 626.271L16 626.27C7.71569 626.27 0.999972 632.986 0.999972 641.27L0.999967 763'
        scale={scale}
      />
      <ConnectorPath d='M335 1.5L335 763' scale={scale} />
      <ConnectorPath
        d='M325 1.5L325 627.047C325 635.331 318.284 642.047 310 642.047L197 642.047C188.716 642.047 182 648.763 182 657.047L182 763'
        scale={scale}
      />
    </ConnectorsSvg>
  );
};

const Sources = styled.div`
  position: absolute;

  width: 600px;
  height: 600px;
`;

const Source = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PosterContainer = styled.div``;
const Poster = styled(Image)`
  max-width: 45vw;
  object-fit: cover;

  border-radius: 15px;
`;

const MovieContainer = styled.div`
  margin-top: 441px;
  max-width: 1720px;
  margin: 445px auto 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MovieInfo = styled.div`
  max-width: 45vw;
  overflow: hidden;
  display: grid;

  gap: 41px;

  mask-image: linear-gradient(
    270deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 11.98%,
    #d9d9d9 88.02%,
    rgba(217, 217, 217, 0.0104167) 100%
  );
`;

const Row = styled(motion.div)<{ totalWidth: number }>`
  display: flex;
  gap: 50px;
  width: ${({ totalWidth }) => `calc(100% * ${totalWidth})`};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 60px;
  gap: 10px;

  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;
const MovieTitle = styled.h4`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;
`;

const TitleText = styled.p`
  margin: 0;
`;
const MovieDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin: 0;
`;
const MovieNumber = styled.p`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;
`;
const MovieCountry = styled.p`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;
`;
const MovieAward = styled(Image)``;

const PersonContainer = styled.div`
  max-width: 223px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;
const PersonPhoto = styled(Image)``;
const PersonName = styled.span`
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  color: #ffffff;
`;

const Section = styled.section``;

const Example = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const totalWidth = data.titles.reduce((acc, curr) => {
    const titleWidth = curr.length * 64;
    return acc + titleWidth;
  }, 0);
  const radius = 260;
  const centerX = 300;
  const centerY = 300;
  const sourcesCount = data.sources.length;
  const angleStep = 360 / sourcesCount;
  return (
    <Section ref={ref}>
      <TitleContainer>
        <Titles totalWidth={totalWidth}>
          {data.titles.map((title, index) => (
            <Title key={index}>{title}</Title>
          ))}
        </Titles>
      </TitleContainer>
      <SourcesContainer>
        <Connectors scrollYProgress={scrollYProgress}></Connectors>

        <CircleContainer>
          <Circles />
        </CircleContainer>
        <Sources>
          {data.sources.map((source, index) => {
            const angle = index * angleStep;
            const x = Math.round(centerX + radius * Math.cos((angle * Math.PI) / 180));
            const y = Math.round(centerY + radius * Math.sin((angle * Math.PI) / 180));
            return <Source key={index} src={source.logo} alt={source.name} style={{ top: y, left: x }} />;
          })}
        </Sources>
        <LogoBackground width='334' height='353' src='/img/example-bg.png' alt='bg'></LogoBackground>
        <LogoContainer>
          <Logo width='108' height='91' src='/img/logo.png' alt='open movie api' />
        </LogoContainer>
      </SourcesContainer>
      <MovieContainer>
        <PosterContainer>
          <Poster width={835} height={469} src={data.movie.poster} alt={data.movie.titles[0]} />
        </PosterContainer>
        <MovieInfo>
          <Row
            totalWidth={totalWidth}
            initial={{ translateX: -100 }}
            animate={{ translateX: 100 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            {data.movie.titles.map((title, index) => (
              <InfoContainer key={index}>
                <MovieTitle>
                  {title.split('\n').map((str, i) => (
                    <TitleText key={`title_${i}`}>{str}</TitleText>
                  ))}
                </MovieTitle>
              </InfoContainer>
            ))}
            {data.movie.descriptions.map((description, index) => (
              <InfoContainer key={index}>
                <MovieDescription>{description}</MovieDescription>
              </InfoContainer>
            ))}
          </Row>
          <Row totalWidth={totalWidth}>
            <InfoContainer>
              <MovieNumber>{data.movie.year}</MovieNumber>
            </InfoContainer>
            <InfoContainer>
              <MovieNumber>{data.movie.rating}</MovieNumber>
            </InfoContainer>
            <InfoContainer>
              <MovieNumber>{data.movie.budget}</MovieNumber>
            </InfoContainer>
            {data.movie.countries.map((country, index) => (
              <InfoContainer key={index}>
                <MovieCountry>{country}</MovieCountry>
              </InfoContainer>
            ))}
            {data.movie.awards.map((award, index) => (
              <MovieAward key={index} height={87} width={87} alt={award.name} src={award.logo} />
            ))}
          </Row>
          <Row totalWidth={totalWidth}>
            {data.movie.actors.map((person, index) => (
              <InfoContainer key={index}>
                <PersonContainer>
                  <PersonPhoto width={88} height={126} alt={person.name} src={person.photo} />
                  <PersonName>
                    {person.name.split('\n').map((str, i) => (
                      <TitleText key={`person_name_${i}`}>{str}</TitleText>
                    ))}
                  </PersonName>
                </PersonContainer>
              </InfoContainer>
            ))}
          </Row>
        </MovieInfo>
      </MovieContainer>
    </Section>
  );
};

export default Example;
