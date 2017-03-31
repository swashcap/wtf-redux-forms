import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import recipes from './recipes';

const rootReducer = combineReducers({
  form: formReducer,
  recipes,
});

export default rootReducer;
