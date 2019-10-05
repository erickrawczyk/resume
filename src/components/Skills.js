import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import { List, ListItem } from './List';

const ItemTitle = styled.b`
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 125px;
  display: inline-block;
`;

const Skills = () => (
  <Section title="Skills">
    <List>
      <ListItem>
        <ItemTitle>Frontend</ItemTitle>React, Redux, Styled Components,
        AngularJS, JavaScript
      </ListItem>
      <ListItem>
        <ItemTitle>Backend</ItemTitle>Node, Python, GraphQL, REST, PostgreSQL,
        MySQL, DynamoDB
      </ListItem>
      <ListItem>
        <ItemTitle>DevOps</ItemTitle>AWS, Docker, Heroku, CircleCI, GitLabCI
      </ListItem>
      <ListItem>
        <ItemTitle>Tooling</ItemTitle>Yarn/npm, Git, Jest, Puppeteer, Enzyme
      </ListItem>
    </List>
  </Section>
);

export default Skills;
