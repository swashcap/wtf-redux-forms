export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';

export const loadRecipes = () => (dispatch) => {
  dispatch({
    type: RECIPES_REQUEST,
  });

  // Simulate async request for recipes
  setTimeout(() => {
    dispatch({
      payload: [{
        id: 100,
        inputs: [],
        name: 'Pies',
        summary: 'Delicious pastry focused on the filling.',
      }, {
        id: 101,
        inputs: [],
        name: 'Stir Fry',
        summary: 'Greased vegetables and meats served over noodles or rice.',
      }, {
        id: 102,
        inputs: [],
        name: 'Sandwich',
        summary: 'Put it between two slices of bread. Sandwich!'
      }],
      type: RECIPES_SUCCESS,
    });
  }, 250);
};

