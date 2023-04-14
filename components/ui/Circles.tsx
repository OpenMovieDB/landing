import styled from 'styled-components';

import { useMobileDevice } from '../../hooks/useMobileDevice';

interface CircleProps {
  duration: number;
  r: string;
  mobile: boolean;
}

const Circle: React.FC<CircleProps> = ({ r, mobile }) => {
  const center = mobile ? '163.5' : '418';
  const radius = mobile ? ((parseInt(r, 10) * 327) / 836).toString() : r;

  return (
    <circle cx={center} cy={center} r={radius} stroke='white' strokeOpacity='0.1' strokeLinecap='round'>
      <animateTransform
        attributeName='transform'
        attributeType='XML'
        type='rotate'
        from={`0 ${center} ${center}`}
        to={`360 ${center} ${center}`}
        dur='50s'
        repeatCount='indefinite'
      />
    </circle>
  );
};

const CirclesSvg = styled.svg`
  width: 836px;
  height: 836px;
  stroke-width: 2;
  stroke-dasharray: 2 6;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    stroke-width: 2;
    stroke-dasharray: 3 6;
  }
`;

interface CirclesProps {
  mobile?: boolean;
}

const Circles: React.FC<CirclesProps> = () => {
  const isMobile = useMobileDevice();
  const circles = ['262', '417', '167'];
  const size = isMobile ? '327' : '836';

  return (
    <CirclesSvg viewBox={`0 0 ${size} ${size}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
      {circles.map((el, idx) => (
        <Circle key={idx} mobile={isMobile} r={el} duration={25} />
      ))}
    </CirclesSvg>
  );
};

export default Circles;
