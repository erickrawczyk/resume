import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { Job, JobDetail } from './Job';

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Education = () => (
  <Section title="Education">
    <Job
      company="University Of Michigan"
      location="Ann Arbor, MI"
      startDate="Sep. 2011"
      endDate="May. 2015"
    >
      <JobDetail>Pursued Computer Science</JobDetail>
    </Job>
  </Section>
);

export default Education;
