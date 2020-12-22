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
      roles={[
        {
          name: 'Pursued Computer Science',
          start: 'Sep. 2011',
          end: 'May 2015',
        },
      ]}
    />
  </Section>
);

export default Education;
