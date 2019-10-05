import React from 'react';
import styled from 'styled-components';

import Page from './components/Page';
import Header from './components/Header';
import Skills from './components/Skills';

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

const App = () => (
  <Page>
    <Header />
    <Divider />
    <Skills />
  </Page>
);

export default App;
