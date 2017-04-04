import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import App from '../components/App';
/*
import RecipesForm from './RecipesForm';

        <Route path="/new" component={RecipesForm} />
        <Route path="/edit/:id" component={RecipesForm} />
*/
export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route path="/" component={App} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

