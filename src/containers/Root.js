import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

