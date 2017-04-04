import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import recipes from './recipes';

const rootReducer = combineReducers({
  form,
  recipes,
  routing,
});

export default rootReducer;
