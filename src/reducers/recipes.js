import { RECIPES_SUCCESS } from '../actions';

const recipes = (state = [], action) => {
  if (action.type === RECIPES_SUCCESS) {
    return action.payload;
  }
  
  return state;
};

export default recipes;
