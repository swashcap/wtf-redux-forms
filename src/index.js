import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import history from './history';
import Root from './containers/Root';

import '../node_modules/purecss/build/pure.css';

const store = configureStore();

render(
  <Root history={history} store={store} />,
  document.getElementById('root')
);
