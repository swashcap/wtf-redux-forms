import { RECIPES_UPDATE } from '../actions';
import recipes from './recipes';

it('should update existing recipe', () => {
  const initialState = {
    1: {
      description: 'It\'s great!',
      name: 'My great recipe',
      recipeInputs: [
        [{
          mode: 'boolean',
          name: 'A boolean',
        }, {
          mode: 'number',
          name: 'A number',
        }],
        1,
      ],
      type: '1',
    },
  };
  const action = {
    type: RECIPES_UPDATE,
    payload: {
      description: 'It\'s great!',
      id: 1,
      name: 'My great recipe',
      recipeInputs: [
        [{
          mode: 'boolean',
          name: 'A boolean',
        }],
        2,
      ],
      type: '2',
    },
  };
  const state = recipes(initialState, action);

  expect(state).not.toBe(initialState);
  expect(state).toEqual({
    1: {
      description: 'It\'s great!',
      name: 'My great recipe',
      recipeInputs: [
        [{
          mode: 'boolean',
          name: 'A boolean',
        }],
        2,
      ],
      type: '2',
    },
  });
});

