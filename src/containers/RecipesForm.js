import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form';
import uniqueId from 'lodash.uniqueid';

import { fetchRecipes, saveRecipe } from '../actions/';
import RecipeSelectorField from '../components/RecipeSelectorField';
import RecipeInputsField from '../components/RecipeInputsField';
import TextField from '../components/TextField';
import TextareaField from '../components/TextareaField';

const FORM_NAME = 'recipes';

class RecipesForm extends Component {
  constructor(props) {
    super(props);
    this.onRecipeTypeChange = this.onRecipeTypeChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchRecipes());
  }

  onRecipeTypeChange(event, newValue, previousValue) {
    const { array: { removeAll } } = this.props;

    // Clear recipe inputs when the recipe type changes
    if (newValue && newValue !== previousValue) {
      removeAll('recipeInputs');
    }
  }

  render() {
    const { handleSubmit, pristine, recipeInputs, recipes, reset } = this.props;

    return (
      <form
        className="pure-form pure-form-stacked"
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
          component={RecipeSelectorField}
          label="Recipe type"
          name="type"
          onChange={this.onRecipeTypeChange}
          recipes={recipes}
        />

        <FieldArray
          component={RecipeInputsField}
          recipeInputs={recipeInputs}
          name="recipeInputs"
        />

        <button
          className="pure-button pure-button-primary"
          type="submit"
        >
          Save
        </button>
        <button
          className="pure-button"
          disabled={pristine}
          onClick={reset}
          type="reset"
        >
          Cancel
        </button>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state) => {
  const { recipes } = state;
  const {
    recipeInputs: recipeInputsValues,
    type,
  } = selector(state, 'recipeInputs', 'type');
  const selectedType = type || (recipes[0] || {}).id;
  const selectedRecipe = recipes.find(({ id }) => id === selectedType);
  const recipeInputs = selectedRecipe ?
    selectedRecipe.recipeInputs :
    [];

  return {
    initialValues: {
      recipeInputs: recipeInputs.map((recipeInput) => (
        'defaultValue' in recipeInput ? recipeInput.defaultValue : ''
      )),
      type: selectedType,
    },
    recipeInputs,
    recipes,
  };
};

export default connect(mapStateToProps)(reduxForm({
  enableReinitialize: true,
  form: FORM_NAME,
  onSubmit(values, dispatch, props) {
    debugger;
    dispatch(saveRecipe({
      id: uniqueId(),
    }));
  },
})(RecipesForm));

