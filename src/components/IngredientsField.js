import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import TextField from './TextField'

export default function IngredientsField({ fields }) {
  return (
    <fieldset>
      <ol>
        {fields.map((name, index) => (
          <li className="pure-g" key={index}>
            <div className="pure-u-2-5">
              <Field
                component={TextField}
                label="Oven"
                name={`${name}.oven`}
              />
            </div>
            <div className="pure-u-2-5">
              <Field
                component={TextField}
                label="Chill"
                name={`${name}.chill`}
              />
            </div>
            <div className="pure-u-1-5">
              <button
                className="pure-button button-error"
                onClick={() => fields.remove(index)}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
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
