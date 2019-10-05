import React from 'react';
import styled from 'styled-components';

import { CIRCLE_SIZE } from '../lib/constants';

const Container = styled.div`
  margin-right: 0.5rem;
`;

const Circle = styled.div`
  height: ${CIRCLE_SIZE}rem;
  width: ${CIRCLE_SIZE}rem;
  border-radius: 50%;
  border: 1px solid black;
`;

const Line = styled.div`
  height: 90%;
  border-left: 1px solid black;
  margin: -1px 0 0 6px;
`;

const CircleLine = () => (
  <Container>
    <Circle />
    <Line />
  </Container>
);

export default CircleLine;
