import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import recipes from './recipes';
import types from './types';

const rootReducer = combineReducers({
  form,
  recipes,
  routing,
  types,
});

export default rootReducer;
