import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

require('./index.html');

// Create app
const container = document.getElementById('app-container');

// Render app
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , container
    );
  });
}