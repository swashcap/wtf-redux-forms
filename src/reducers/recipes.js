import omit from 'lodash/omit';
import uniqueId from 'lodash/uniqueId';

import { RECIPES_DELETE, RECIPES_SAVE, RECIPES_UPDATE } from '../actions';

const SEED_RECIPES = {
  [uniqueId()]: {
    name: 'My great recipe!',
    description: 'This recipe was passed down to me from my greatness.',
    type: '1',
    recipeInputs: [
      400,
      [{
        mode: 'boolean',
        name: 'Spice',
      }, {
        mode: 'number',
        name: 'Zest',
      }]
    ],
  },
};

const recipes = (state = SEED_RECIPES, action) => {
  switch (action.type) {
    case RECIPES_DELETE:
      return omit(state, [action.payload]);
    case RECIPES_SAVE:
      return Object.assign({}, state, {
        [uniqueId()]: action.payload,
      });
    case RECIPES_UPDATE:
      return Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });
    default:
      return state;
  }
};

export default recipes;
