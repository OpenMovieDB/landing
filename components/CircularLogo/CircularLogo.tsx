import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #080715;
  border-radius: 200px;
  width: 212px;
  height: 212px;

  @media (max-width: 768px) {
    width: 162px;
    height: 162px;
  }

  @media (max-width: 540px) {
    width: 131px;
    height: 131px;
  }
`;

const Logo = styled.img`
  width: 108px;
  height: 91.2px;

  @media (max-width: 768px) {
    width: 66.74px;
    height: 56.36px;
  }
`;

interface CircularLogoProps {
  src: string;
  alt: string;
}

const CircularLogo: React.FC<CircularLogoProps> = ({ src, alt }) => {
  return (
    <LogoContainer>
      <Logo src={src} alt={alt} />
    </LogoContainer>
  );
};

export default CircularLogo;