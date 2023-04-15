import { useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

import Sources from '../../components/Cources/Sources';
import Circles from '../../components/ui/Circles';
import Connectors from '../../components/ui/Connectors';
import ParallaxTitles from '../../components/ui/ParalaxTitles';
import SectionContainer from '../../components/ui/SectionContainer';
import SideFade from '../../components/ui/SideFade';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import CircularLogo from '../../components/CircularLogo/CircularLogo';
import MoviePoster from '../../components/MoviePoster/MoviePoster';

const data = {
  title: 'Информация о фильмах из популярных источников',
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

const SourcesContainer = styled.div`
  height: 860px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 431px;
  }
`;

const MovieContainer = styled.div`
  max-width: 1720px;
  margin: 445px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 200px auto 0 auto;
  }
`;

const ConnectorsContainer = styled.div`
  position: absolute;
  transform: translate(15px, 480px);

  @media (max-width: 1348px) {
    transform: translate(7px, 260px);
  }
`;

const Example: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <SectionContainer ref={ref}>
      <SideFade>
        <ParallaxTitles baseVelocity={-5}>{data.title}</ParallaxTitles>
      </SideFade>
      <SourcesContainer>
        <ConnectorsContainer>
          <Connectors scrollYProgress={scrollYProgress} />
        </ConnectorsContainer>

        <Circles />
        <Sources sources={data.sources} />
        <CircularLogo src='/img/logo.png' alt='open movie api' />
      </SourcesContainer>

      <MovieContainer>
        <MoviePoster width={835} height={450} src={data.movie.poster} alt={data.movie.titles[0]} />
        <SideFade>
          <MovieInfo movie={data.movie} />
        </SideFade>
      </MovieContainer>
    </SectionContainer>
  );
};

export default Example;
