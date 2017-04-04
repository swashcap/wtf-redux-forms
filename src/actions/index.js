export const TYPES_REQUEST = 'TYPES_REQUEST';
export const TYPES_SAVE = 'TYPES_SAVE';
export const TYPES_SUCCESS = 'TYPES_SUCCESS';

const SEED_TYPES = [{
  id: '1',
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
  id: '2',
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
  id: '3',
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
}];

export const fetchTypes = () => (dispatch, getState) => {
  const { types } = getState();

  if (!types.length) {
    dispatch({
      type: TYPES_REQUEST,
    });

    // Simulate async request for recipes
    setTimeout(() => {
      dispatch({
        payload: SEED_TYPES,
        type: TYPES_SUCCESS,
      });
    }, 500);
  }
};

export const RECIPES_DELETE = 'RECIPES_DELETE';
export const RECIPES_SAVE = 'RECIPES_SAVE';
export const RECIPES_UPDATE = 'RECUPES_UPDATE';

export const deleteRecipe = (id) => ({
  payload: id,
  type: RECIPES_DELETE,
});

export const saveRecipe = (recipe) => ({
  payload: recipe,
  type: RECIPES_SAVE,
});

export const updateRecipe = (recipe) => ({
  payload: recipe,
  type: RECIPES_UPDATE,
});

