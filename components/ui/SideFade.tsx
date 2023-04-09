import styled from 'styled-components';

const SideFade = styled.div`
  overflow: hidden;
  mask-image: linear-gradient(
    270deg,
    rgba(217, 217, 217, 0) 0%,
    #d9d9d9 11.98%,
    #d9d9d9 88.02%,
    rgba(217, 217, 217, 0.0104167) 100%
  );
`;

export default SideFade;
