import React, { FC, memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';

interface Source {
  name: string;
  logo: string;
}

interface SourcesProps {
  sources: Source[];
}

const SourcesContainer = styled.div<{ size: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.size}px;
  max-height: ${(props) => props.size}px;
`;

const SourceImage = styled.img<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const calculateDimensions = (windowWidth: number): { width: number; height: number } => {
  if (windowWidth > 768) {
    return { width: 600, height: 600 };
  } else {
    return { width: 300, height: 300 };
  }
};

const calculateCircularPosition = (
  index: number,
  sourcesCount: number,
  dimensions: { width: number; height: number },
): { x: number; y: number } => {
  const radius = dimensions.width * 0.43;
  const centerX = dimensions.width * 0.5;
  const centerY = dimensions.height * 0.5;
  const angleStep = (2 * Math.PI) / sourcesCount;
  const angle = index * angleStep;

  const x = Math.round(centerX + radius * Math.cos(angle));
  const y = Math.round(centerY + radius * Math.sin(angle));

  return { x, y };
};

const Sources: FC<SourcesProps> = memo(({ sources }) => {
  const windowWidth = useWindowSize().width;

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const newDimensions = calculateDimensions(windowWidth);
    setDimensions(newDimensions);
  }, [windowWidth]);

  return (
    <SourcesContainer size={dimensions.width}>
      {sources.map((source, index) => {
        const { x, y } = calculateCircularPosition(index, sources.length, dimensions);
        return (
          <SourceImage
            key={index}
            src={source.logo}
            alt={source.name}
            size={dimensions.width / 9}
            style={{ top: y, left: x }}
          />
        );
      })}
    </SourcesContainer>
  );
});

export default Sources;
