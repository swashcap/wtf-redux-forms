import React, { PropTypes } from 'react';
import { Field, FieldArray } from 'redux-form';

import IngredientsField from './IngredientsField';
import NumberField from './NumberField';
import TextField from './TextField';

export default function RecipeInputsField({ inputs, fields }) {
  const recipeInputs = Array.isArray(inputs) && inputs.length ?
    (
      <ul>
        {fields.map((name, index) => {
          const fieldProps = Object.assign({ name }, inputs[index]);
          let component;

          // redux-form uses `.inputs` as props. Don't squash!
          fieldProps.recipeInputs = fieldProps.inputs;
          delete fieldProps.inputs;
          // debugger;

          if (fieldProps.type === 'number') {
            component = <Field component={NumberField} {...fieldProps} />;
          // } else if (fieldProps.type === 'ingredients') {
          //  component = (
          //    <FieldArray
          //      component={IngredientsField}
          //      {...fieldProps}
          //    />
          //  );*/}
          } else {
            component = <Field component={TextField} {...fieldProps} />;
          }

          return <li key={index}>{component}</li>;
        })}
      </ul>
    ) :
    (
      <span>Loading…</span>
    );

  return (
    <fieldset className="RecipeInputsField">
      <legend>Recipe Inputs</legend>
      {recipeInputs}
    </fieldset>
  );
}

RecipeInputsField.propTypes = {
  fields: PropTypes.object.isRequired,
};

