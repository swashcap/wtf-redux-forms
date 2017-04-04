import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { push } from 'react-router-redux';

import { saveRecipe, updateRecipe } from '../actions/';
import RecipeTypesField from '../components/RecipeTypesField';
import RecipeInputsField from '../components/RecipeInputsField';
import TextField from '../components/TextField';
import TextareaField from '../components/TextareaField';

import './RecipesForm.css';

const FORM_NAME = 'recipes';

class RecipesForm extends Component {
  constructor(props) {
    super(props);
    this.onRecipeTypeChange = this.onRecipeTypeChange.bind(this);
  }

  onRecipeTypeChange(event, newValue, previousValue) {
    const { array: { removeAll } } = this.props;

    // Clear recipe inputs when the recipe type changes
    if (newValue && newValue !== previousValue) {
      removeAll('recipeInputs');
    }
  }

  render() {
    const {
      handleSubmit,
      params,
      pristine,
      recipeInputs,
      recipes,
      reset,
      types,
    } = this.props;

    const submitText = params.id ? 'Update' : 'Save';

    return (
      <form
        className="RecipesForm pure-form pure-form-stacked"
        onSubmit={handleSubmit}
      >
        <Field
          component={TextField}
          label="Name"
          name="name"
        />

        <Field
          component={TextareaField}
          label="Description"
          name="description"
        />

        <Field
          component={RecipeTypesField}
          label="Recipe type"
          name="type"
          onChange={this.onRecipeTypeChange}
          types={types}
        />

        <FieldArray
          component={RecipeInputsField}
          recipeInputs={recipeInputs}
          name="recipeInputs"
        />

        <div className="RecipesForm-button-group">
          <button
            className="pure-button pure-button-primary"
            type="submit"
          >
            {submitText}
          </button>
          <button
            className="pure-button"
            disabled={pristine}
            onClick={reset}
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

RecipesForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  recipeInputs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['ingredients', 'number']).isRequired,
  })),
  recipes: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  types: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (
  state,
  {
    params: {
      id: recipeId,
    },
  }
) => {
  const { recipes, types } = state;
  const formValues = selector(state, 'type');
  const initialValues = recipeId && recipeId in recipes ?
    recipes[recipeId] :
    {};

  if (!initialValues.type) {
    initialValues.type = formValues && formValues.type ?
      formValues.type :
      '2'; // Default type id
  }

  const recipeInputs = get(
    types.find(({ id }) => id === initialValues.type),
    'recipeInputs',
    []
  );

  if (!initialValues.recipeInputs) {
    initialValues.recipeInputs = recipeInputs.map((recipeInput) => (
      'defaultValue' in recipeInput ? recipeInput.defaultValue : ''
    ));
  }

  return {
    initialValues,
    recipeInputs,
    types,
  };
};

export default connect(mapStateToProps)(reduxForm({
  enableReinitialize: true,
  form: FORM_NAME,
  onSubmit(values, dispatch, props) {
    const {
      params: { id },
    } = props;

    if (id) {
      dispatch(updateRecipe(Object.assign({ id }, values)));
    } else {
      dispatch(saveRecipe(values));
    }
    dispatch(push('/'));
  },
})(RecipesForm));

