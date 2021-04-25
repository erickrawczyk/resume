import React from 'react';
import styled from 'styled-components';

import CircleLine from './CircleLine';

const Container = styled.div`
  margin: 0.5rem 0;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

const Name = styled.b`
  font-size: 1.25rem;
`;

const About = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
`;

const Role = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const Pitch = styled.div`
  margin: 0.5rem 0;
  font-size: 0.85rem;
`;

export const JobDetail = styled.li`
  margin: 0.5rem 0;
  font-size: 0.85rem;
`;

const Summary = styled.ul`
  padding-inline-start: 20px;
  margin: 0.5rem 0;
  font-weight: 300;
`;

export const Job = ({ company, location, roles = [], pitch, children }) => (
  <Container>
    <CircleLine />
    <Content>
      <About>
        <div>
          <Name>{company}</Name>
        </div>
        <div>{location}</div>
      </About>

      {roles.length &&
        roles.map(({ name, start, end = 'Present' }) => (
          <Role key={name}>
            <div>{name ? name : null}</div>
            <div>
              {start} - {end}
            </div>
          </Role>
        ))}

      {pitch && (
        <Pitch>
          <i>{pitch}</i>
        </Pitch>
      )}

      <Summary>{children}</Summary>
    </Content>
  </Container>
);

export default Job;
