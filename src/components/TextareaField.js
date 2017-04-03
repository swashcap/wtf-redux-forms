import React, { PropTypes } from 'react';

export default function TextareaField({ input, label, meta }) {
  return (
    <div className="pure-control-group">
      <label htmlFor={input.name}>{label}</label>
      <textarea id={input.name} {...input}></textarea>
    </div>
  );
}

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

