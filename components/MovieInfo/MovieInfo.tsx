import Image from 'next/image';
import styled from 'styled-components';

import type { Movie } from '../../common/types';
import ParallaxSlider from '../ui/ParallaxSlider';

const MovieInfoContainer = styled.div`
  max-width: 45vw;
  display: grid;
  gap: 41px;

  @media (max-width: 1350px) {
    max-width: 90vw;
    margin: 0 auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 60px;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
    padding: 25px 25px;
  }

  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
`;

const MovieTitle = styled.h4`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const TitleText = styled.p`
  margin: 0;
`;

const MovieDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin: 0;
  max-width: 1192px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

const MovieNumber = styled.p`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const MovieCountry = styled.p`
  font-weight: 800;
  font-size: 36px;
  line-height: 37px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const MovieAward = styled.img`
  margin: auto;

  @media (max-width: 768px) {
    height: 60px;
    object-fit: contain;
  }
`;

const PersonContainer = styled.div`
  max-width: 223px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;
const PersonPhoto = styled(Image)`
  @media (max-width: 768px) {
    font-size: 14px;
    width: 66px;
    height: 95px;
  }
`;
const PersonName = styled.span`
  font-weight: 800;
  font-size: 18px;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  color: #ffffff;
`;

interface MovieInfoProps {
  movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <MovieInfoContainer>
      <ParallaxSlider baseVelocity={1}>
        {movie.titles.map((title, index) => (
          <InfoContainer key={index}>
            <MovieTitle>
              {title.split('\n').map((str, i) => (
                <TitleText key={`title_${i}`}>{str}</TitleText>
              ))}
            </MovieTitle>
          </InfoContainer>
        ))}
        {movie.descriptions.map((description, index) => (
          <InfoContainer key={index}>
            <MovieDescription>{description}</MovieDescription>
          </InfoContainer>
        ))}
      </ParallaxSlider>
      <ParallaxSlider baseVelocity={2}>
        <InfoContainer>
          <MovieNumber>{movie.year}</MovieNumber>
        </InfoContainer>
        <InfoContainer>
          <MovieNumber>{movie.rating}</MovieNumber>
        </InfoContainer>
        <InfoContainer>
          <MovieNumber>{movie.budget}</MovieNumber>
        </InfoContainer>
        {movie.countries.map((country, index) => (
          <InfoContainer key={index}>
            <MovieCountry>{country}</MovieCountry>
          </InfoContainer>
        ))}
        {movie.awards.map((award, index) => (
          <MovieAward key={index} height={87} width={87} alt={award.name} src={award.logo} />
        ))}
      </ParallaxSlider>
      <ParallaxSlider baseVelocity={5}>
        {movie.actors.map((person, index) => (
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
      </ParallaxSlider>
    </MovieInfoContainer>
  );
};

export default MovieInfo;
