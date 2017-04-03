import React, { Component, PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import RecipeSelectorField from './RecipeSelectorField';
import RecipeInputsField from './RecipeInputsField';
import TextField from './TextField';
import TextareaField from './TextareaField';

class RecipesForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { handleSubmit } = this.props;
    console.log(values);
    handleSubmit(values);
  }

  render() {
    const { inputs, recipes } = this.props;

    return (
      <form
        className="pure-form pure-form-stacked"
        onSubmit={this.onSubmit}
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
          recipes={recipes}
        />

        <FieldArray
          component={RecipeInputsField}
          inputs={inputs}
          name="inputs"
        />

        <button
          className="pure-button pure-button-primary"
          type="submit"
        >
          Save
        </button>
        <button
          className="pure-button"
          type="reset"
        >
          Cancel
        </button>
      </form>
    );
  }
}

RecipesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'recipes',
})(RecipesForm);

