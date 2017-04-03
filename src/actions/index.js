import uniqueId from 'lodash.uniqueid';

export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export const RECIPES_SAVE = 'RECIPES_SAVE';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';

export const fetchRecipes = () => (dispatch) => {
  dispatch({
    type: RECIPES_REQUEST,
  });

  // Simulate async request for recipes
  setTimeout(() => {
    dispatch({
      payload: [{
        id: uniqueId(),
        recipeInputs: [{
          defaultValue: 425,
          label: 'Bake temperature',
          type: 'number',
        }, {
          label: 'Ingredients',
          type: 'ingredients',
        }],
        name: 'Pies',
        summary: 'Delicious pastry focused on the filling.',
      }, {
        id: uniqueId(),
        recipeInputs: [{
          defaultValue: [{
            mode: 'boolean',
            name: 'Microwave',
          }],
          label: 'Ingredients',
          type: 'ingredients',
        }, {
          defaultValue: 0,
          label: 'Calories',
          type: 'number',
        }],
        name: 'Stir Fry',
        summary: 'Greased vegetables and meats served over noodles or rice.',
      }, {
        id: uniqueId(),
        recipeInputs: [{
          defaultValue: 0,
          label: 'Spicy chilies count',
          type: 'number',
        }, {
          label: 'Ingredients',
          type: 'ingredients',
        }],
        name: 'Sandwich',
        summary: 'Put it between two slices of bread. Sandwich!'
      }],
      type: RECIPES_SUCCESS,
    });
  }, 500);
};

export const saveRecipe = (recipe) => {
  return {
    payload: recipe,
    type: RECIPES_SAVE,
  };
};

