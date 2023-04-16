import styled from 'styled-components';

const Title = styled.h3`
  position: absolute;
  background: #070612;
  width: 100%;
  text-align: center;

  margin: 0;
  font-family: 'ppmi', sans-serif;
  font-size: 64px;
  line-height: 66px;
  font-weight: 800;
  font-size: 96px;
  line-height: 98px;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    .section-title {
      font-size: 45px;
      line-height: normal;
    }
  }

  @media (max-width: 576px) {
    .section-title {
      font-size: 32px;
    }
  }
`;

export default Title;
