import { TYPES_SUCCESS } from '../actions';

const types = (state = [], action) => {
  if (action.type === TYPES_SUCCESS) {
    return action.payload;
  }

  return state;
};

export default types;
