import React from 'react';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './containers/Root';

import '../node_modules/purecss/build/pure.css';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root history={history} store={store} />,
  document.getElementById('root')
);
