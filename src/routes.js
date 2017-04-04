import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import RecipesForm from './containers/RecipesForm';

export default (
  <Route path="/" component={App}>
    <Route path="/edit/:id" component={RecipesForm} />
    <Route path="/new" component={RecipesForm} />
  </Route>
);

