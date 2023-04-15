import { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const PosterContainer = styled.div`
  @media (max-width: 1350px) {
    max-width: 90vw;

    margin: 0 auto;
  }
`;

const Poster = styled(Image)`
  height: 100%;
  max-width: 45vw;
  object-fit: cover;

  border-radius: 15px;

  @media (max-width: 700px) {
    max-width: 90vw;
    max-height: 22vh;
  }
`;

const MoviePoster: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <PosterContainer>
      <Poster src={src} alt={alt} width={width} height={height} />
    </PosterContainer>
  );
};

export default MoviePoster;
