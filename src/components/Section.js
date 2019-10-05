import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Section;
