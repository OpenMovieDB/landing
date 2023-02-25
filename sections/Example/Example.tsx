import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
const Circles = () => (
  <svg width='836' height='836' viewBox='0 0 836 836' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Circle cx='418' cy='418' r='262' duration={25} />
    <Circle cx='418' cy='418' r='417' duration={25} />
    <Circle cx='418' cy='418' r='167' duration={25} />
  </svg>
);
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

const ConnectorPath = ({ d }: { d: string }) => (
  <motion.path
    d={d}
    stroke='white'
    stroke-opacity='0.1'
    stroke-width='2'
    initial={{ pathLength: 0, pathOffset: 1 }}
    animate={{ pathLength: 1, pathOffset: 0 }}
    transition={{ duration: 2 }}
  />
);

const Connectors = () => (
  <ConnectorsSvg width='685' height='763' viewBox='0 0 685 763' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <ConnectorPath d='M683.496 791.002L683.496 673.659C683.496 665.375 676.78 658.659 668.496 658.659L359.5 658.659C351.216 658.659 344.5 651.943 344.5 643.659L344.5 3.49999' />
    <ConnectorPath d='M0.999935 783.598L0.999967 673.598C0.999969 665.313 7.7157 658.598 16 658.598L299.496 658.598C307.78 658.598 314.496 651.882 314.496 643.598L314.496 1.5' />
    <ConnectorPath d='M334.5 786L334.5 1' />
    <ConnectorPath d='M181.5 799L181.5 687.5C181.5 679.216 188.216 672.5 196.5 672.5L309.496 672.5C317.78 672.5 324.496 665.784 324.496 657.5L324.496 0' />
  </ConnectorsSvg>
);

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

const Row = styled.div<{ totalWidth: number }>`
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
    <Section>
      <TitleContainer>
        <Titles totalWidth={totalWidth}>
          {data.titles.map((title, index) => (
            <Title key={index}>{title}</Title>
          ))}
        </Titles>
      </TitleContainer>
      <SourcesContainer>
        <Connectors></Connectors>

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
          <Row totalWidth={totalWidth}>
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
