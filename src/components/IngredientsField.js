import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

import SelectField from './SelectField'
import TextField from './TextField'

import './IngredientsField.css';

export default function IngredientsField({ fields }) {
  return (
    <fieldset className="IngredientsField">
      <ol>
        {fields.map((name, index) => (
          <li className="pure-g" key={index}>
            <div className="pure-u-2-5">
              <Field
                component={TextField}
                label="Name"
                name={`${name}.name`}
              />
            </div>
            <div className="pure-u-2-5">
              <Field
                component={SelectField}
                label="Mode"
                name={`${name}.mode`}
              >
                <option value="boolean">True/False</option>
                <option value="number">Number</option>
              </Field>
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
      <div className="pure-g">
        <div className="pure-u-4-5"></div>
        <div className="pure-u-1-5">
          <button
            className="pure-button pure-button-add"
            onClick={() => fields.push({})}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    </fieldset>
  );
}

IngredientsField.propTypes = {
  fields: PropTypes.object.isRequired,
};
