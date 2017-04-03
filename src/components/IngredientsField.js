import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import TextField from './TextField'

export default function IngredientsField({ fields }) {
  /*
      {fields.map((name, index) => (
        <div className="pure-g" key={index}>
          <Field
            className="pure-u-1-2"
            component={TextField}
            label="Oven"
            name={`${name}.oven`}
          />
          <Field
            className="pure-u-1-2"
            component={TextField}
            label="Chill"
            name={`${name}.chill`}
          />
        </div>
      ))}
    */

  return (
    <fieldset>
      <ul>
        {fields.map((name, index) => {
          return <li key={index}>{index}</li>;
        })}
      </ul>
      <button
        className="pure-button"
        onClick={() => fields.push({})}
        type="button"
      >
        Add
      </button>
    </fieldset>
  );
}

IngredientsField.propTypes = {
  fields: PropTypes.object.isRequired,
};
