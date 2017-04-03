export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';

export const fetchRecipes = () => (dispatch) => {
  dispatch({
    type: RECIPES_REQUEST,
  });

  // Simulate async request for recipes
  setTimeout(() => {
    dispatch({
      payload: [{
        id: '100',
        recipeInputs: [{
          defaultValue: 425,
          label: 'Bake temperature',
          type: 'number',
        }, {
          label: 'Ingredients 1',
          type: 'ingredients',
        }],
        name: 'Pies',
        summary: 'Delicious pastry focused on the filling.',
      }, {
        id: '101',
        recipeInputs: [{
          label: 'Ingredients 2',
          type: 'ingredients',
        }],
        name: 'Stir Fry',
        summary: 'Greased vegetables and meats served over noodles or rice.',
      }, {
        id: '102',
        recipeInputs: [{
          defaultValue: 0,
          label: 'Spicy chilies count',
          type: 'number',
        }, {
          label: 'Ingredients 3',
          type: 'ingredients',
        }],
        name: 'Sandwich',
        summary: 'Put it between two slices of bread. Sandwich!'
      }],
      type: RECIPES_SUCCESS,
    });
  }, 500);
};

