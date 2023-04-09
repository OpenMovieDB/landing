import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SourcesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const SourceImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 65px;
  height: 65px;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 500px) {
    width: 31.79px;
    height: 31.79px;
  }
`;

const Sources = ({ sources }: { sources: { name: string; logo: string }[] }) => {
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width > 768) {
        setDimensions({ width: 600, height: 600 });
      } else if (width > 500) {
        setDimensions({ width: 400, height: 400 });
      } else {
        setDimensions({ width: 300, height: 300 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const radius = dimensions.width * 0.43;
  const centerX = dimensions.width * 0.5;
  const centerY = dimensions.height * 0.5;
  const sourcesCount = sources.length;
  const angleStep = 360 / sourcesCount;

  return (
    <SourcesContainer>
      {sources.map((source, index) => {
        const angle = index * angleStep;
        const x = Math.round(centerX + radius * Math.cos((angle * Math.PI) / 180));
        const y = Math.round(centerY + radius * Math.sin((angle * Math.PI) / 180));
        return <SourceImage key={index} src={source.logo} alt={source.name} style={{ top: y, left: x }} />;
      })}
    </SourcesContainer>
  );
};

export default Sources;
