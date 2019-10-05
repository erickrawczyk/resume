import React from 'react';
import styled from 'styled-components';

import CircleLine from './CircleLine';

const Container = styled.div`
  margin: 1rem 0;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
`;

const About = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
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
`;

export const Job = ({
  company,
  role,
  location,
  startDate,
  endDate = 'Present',
  pitch,
  children,
}) => (
  <Container>
    <CircleLine />
    <Content>
      <About>
        <div>
          <b>{company}</b> {role ? <span> | {role}</span> : null}
        </div>
        <div>
          {location} | {startDate} - {endDate}
        </div>
      </About>

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
