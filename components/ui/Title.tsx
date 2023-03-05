import styled from 'styled-components';

import { GRADIENTS } from '../../styles/theme';

const Title = styled.p`
  background: ${GRADIENTS.primaryTitle};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 30px;
  line-height: 94px;
`;

export default Title;
