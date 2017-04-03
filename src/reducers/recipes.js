import { RECIPES_SAVE, RECIPES_SUCCESS } from '../actions';

const recipes = (state = [], action) => {
  switch (action.type) {
    case RECIPES_SAVE:
      return state.concat(action.payload);
    case RECIPES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default recipes;
