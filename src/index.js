import React from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';

const App = () => (
  <Page>
    <h1>Hello World</h1>
  </Page>
);

ReactDOM.render(<App />, document.getElementById('root'));
