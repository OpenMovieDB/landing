import Image from 'next/image';
import styled from 'styled-components';

import { GRADIENTS } from '../../styles/theme';

const Example = () => {
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
      titles: ['Однажды в голливуде', 'Once Upon a Time... in Hollywood'],
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
          name: 'Леонардо ДиКаприо',
          role: 'Rick Dalton',
          photo: '/img/persons/leonardo-dicaprio.png',
        },
        {
          name: 'Брэд Питт',
          role: 'Cliff Booth',
          photo: '/img/persons/brad-pitt.png',
        },
        {
          name: 'Марго Робби',
          role: 'Sharon Tate',
          photo: '/img/persons/margo-robbie.png',
        },
      ],
    },
  };

  const Container = styled.div``;

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

  const SourcesContainer = styled.div``;
  const CircleContainer = styled.div``;
  const Circles = () => (
    <svg width='836' height='836' viewBox='0 0 836 836' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='418'
        cy='418'
        r='262'
        stroke='white'
        stroke-opacity='0.1'
        stroke-width='2'
        stroke-linecap='round'
        stroke-dasharray='2 15'
      />
      <circle
        cx='418'
        cy='418'
        r='417'
        stroke='white'
        stroke-opacity='0.1'
        stroke-width='2'
        stroke-linecap='round'
        stroke-dasharray='2 15'
      />
      <circle
        cx='418'
        cy='418'
        r='167'
        stroke='white'
        stroke-opacity='0.1'
        stroke-width='2'
        stroke-linecap='round'
        stroke-dasharray='2 15'
      />
    </svg>
  );

  const Connectors = () => (
    <svg width='685' height='763' viewBox='0 0 685 763' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M345 0.5L345 613.243C345 621.527 351.716 628.243 360 628.243L669 628.243C677.284 628.243 684 634.959 684 643.243L684 763'
        stroke='url(#paint0_linear_605_770)'
        stroke-opacity='0.1'
        stroke-width='2'
      />
      <path
        d='M315 2L315 611.27C315 619.555 308.284 626.271 300 626.271L16 626.27C7.71569 626.27 0.999972 632.986 0.999972 641.27L0.999967 763'
        stroke='url(#paint1_linear_605_770)'
        stroke-opacity='0.1'
        stroke-width='2'
      />
      <path d='M335 1.5L335 763' stroke='url(#paint2_linear_605_770)' stroke-opacity='0.1' stroke-width='2' />
      <path
        d='M325 1.5L325 627.047C325 635.331 318.284 642.047 310 642.047L197 642.047C188.716 642.047 182 648.763 182 657.047L182 763'
        stroke='url(#paint3_linear_605_770)'
        stroke-opacity='0.1'
        stroke-width='2'
      />
      <g filter='url(#filter0_f_605_770)'>
        <ellipse cx='315' cy='397.5' rx='1' ry='37.5' fill='url(#paint4_linear_605_770)' />
      </g>
      <defs>
        <filter
          id='filter0_f_605_770'
          x='311'
          y='357'
          width='8'
          height='81'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='1.5' result='effect1_foregroundBlur_605_770' />
        </filter>
        <linearGradient id='paint0_linear_605_770' x1='684' y1='763' x2='684' y2='0.5' gradientUnits='userSpaceOnUse'>
          <stop stop-color='white' stop-opacity='0' />
          <stop stop-color='white' stop-opacity='0' />
          <stop offset='0.0989583' stop-color='white' />
          <stop offset='0.908833' stop-color='white' />
          <stop offset='1' stop-color='white' stop-opacity='0' />
        </linearGradient>
        <linearGradient id='paint1_linear_605_770' x1='315' y1='763' x2='315' y2='2' gradientUnits='userSpaceOnUse'>
          <stop stop-color='white' stop-opacity='0' />
          <stop stop-color='white' stop-opacity='0' />
          <stop offset='0.0989583' stop-color='white' />
          <stop offset='0.908833' stop-color='white' />
          <stop offset='1' stop-color='white' stop-opacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_605_770'
          x1='335'
          y1='763'
          x2='-23.5818'
          y2='254.228'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' stop-opacity='0' />
          <stop stop-color='white' stop-opacity='0' />
          <stop offset='0.0989583' stop-color='white' />
          <stop offset='0.908833' stop-color='white' />
          <stop offset='1' stop-color='white' stop-opacity='0' />
        </linearGradient>
        <linearGradient id='paint3_linear_605_770' x1='325' y1='763' x2='325' y2='1.5' gradientUnits='userSpaceOnUse'>
          <stop stop-color='white' stop-opacity='0' />
          <stop stop-color='white' stop-opacity='0' />
          <stop offset='0.0989583' stop-color='white' />
          <stop offset='0.908833' stop-color='white' />
          <stop offset='1' stop-color='white' stop-opacity='0' />
        </linearGradient>
        <linearGradient id='paint4_linear_605_770' x1='315' y1='360' x2='315' y2='435' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#BD00FF' stop-opacity='0' />
          <stop offset='0.46875' stop-color='#BD00FF' />
          <stop offset='1' stop-color='#BD00FF' stop-opacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );

  const Sources = styled.div``;
  const Source = styled(Image)``;
  const Logo = styled(Image)``;

  const PosterContainer = styled.div``;
  const Poster = styled(Image)``;

  const MovieContainer = styled.div``;
  const MovieInfo = styled.div``;
  const FirstRow = styled.div``;
  const SecondRow = styled.div``;
  const ThirdRow = styled.div``;

  const MovieTitle = styled.h4``;
  const MovieDescription = styled.p``;
  const MovieNumber = styled.p``;
  const MovieCountry = styled.p``;
  const MovieAward = styled(Image)``;

  const PersonContainer = styled.div``;
  const PersonPhoto = styled(Image)``;
  const PersonName = styled.span``;
  const PersonRole = styled.span``;

  const Section = styled.section``;
  const totalWidth = data.titles.reduce((acc, curr) => {
    const titleWidth = curr.length * 64;
    return acc + titleWidth;
  }, 0);

  return (
    <Section>
      <TitleContainer>
        <Titles totalWidth={totalWidth}>
          {data.titles.map((title, index) => (
            <Title key={index}>{title}</Title>
          ))}
        </Titles>
      </TitleContainer>
      <SourcesContainer>
        <CircleContainer>
          <Circles />
        </CircleContainer>
        <Sources>
          {data.sources.map((source, index) => (
            <Source key={index} height='65' width='65' src={source.logo} alt={source.name} />
          ))}
        </Sources>
        <Logo width='108' height='91' src='/img/logo.png' alt='open movie api' />
        <Connectors></Connectors>
      </SourcesContainer>
      <MovieContainer>
        <PosterContainer>
          <Poster width={835} height={469} src={data.movie.poster} alt={data.movie.titles[0]} />
        </PosterContainer>
        <MovieInfo>
          <FirstRow>
            {data.movie.titles.map((title, index) => (
              <MovieTitle key={index}>{title}</MovieTitle>
            ))}
            {data.movie.descriptions.map((description, index) => (
              <MovieDescription key={index}>{description}</MovieDescription>
            ))}
          </FirstRow>
          <SecondRow>
            <MovieNumber>{data.movie.year}</MovieNumber>
            <MovieNumber>{data.movie.rating}</MovieNumber>
            <MovieNumber>{data.movie.budget}</MovieNumber>
            {data.movie.countries.map((country, index) => (
              <MovieCountry key={index}>{country}</MovieCountry>
            ))}
            {data.movie.awards.map((award, index) => (
              <MovieAward key={index} height={87} width={87} alt={award.name} src={award.logo} />
            ))}
          </SecondRow>
          <ThirdRow>
            {data.movie.actors.map((person, index) => (
              <PersonContainer key={index}>
                <PersonPhoto width={88} height={126} alt={person.name} src={person.photo} />
                <PersonName>{person.name}</PersonName>
                <PersonRole>{person.role}</PersonRole>
              </PersonContainer>
            ))}
          </ThirdRow>
        </MovieInfo>
      </MovieContainer>
    </Section>
  );
};

export default Example;
