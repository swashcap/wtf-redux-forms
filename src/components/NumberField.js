import React, { PropTypes } from 'react';
import TextField from './TextField';

export default function NumberField(props) {
  return (
    <TextField
      {...Object.assign({}, props, {
        input: Object.assign({}, props.input, {
          min: 0,
          step: 1,
          type: 'number',
        }),
      })}
    />
  );
}

NumberField.propTypes = {
  input: PropTypes.object.isRequired,
};
