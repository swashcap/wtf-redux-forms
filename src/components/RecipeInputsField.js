import React, { PropTypes } from 'react';
import { Field, FieldArray } from 'redux-form';

import IngredientsField from './IngredientsField';
import NumberField from './NumberField';
import TextField from './TextField';

export default function RecipeInputsField({ recipeInputs, fields }) {
  const inputs = Array.isArray(recipeInputs) && recipeInputs.length ?
    fields.map((name, index) => {
      const recipeInput = recipeInputs[index];

      if (recipeInput.type === 'number') {
        return (
          <li key={index}>
            <Field
              component={NumberField}
              name={name}
              {...recipeInput}
            />
          </li>
        );
      } else if (recipeInput.type === 'ingredients') {
        return (
          <li key={index}>
            <FieldArray
              component={IngredientsField}
              name={name}
              {...recipeInput}
            />
          </li>
        );
      } else {
        return (
          <li key={index}>
            <Field
              component={TextField}
              name={name}
              {...recipeInput}
            />
          </li>
        );
      }
    }) :
    <li>Loading…</li>;

  return (
    <fieldset className="RecipeInputsField">
      <legend>Recipe Inputs</legend>
      <ul>
        {inputs}
      </ul>
    </fieldset>
  );
}

RecipeInputsField.propTypes = {
  fields: PropTypes.object.isRequired,
  recipeInputs: PropTypes.array,
};

