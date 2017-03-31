import React, { PropTypes } from 'react';

export default function TextareaField({ input, label, meta }) {
  return (
    <div className="pure-control-group">
      <label htmlFor={input.id}>{label}</label>
      <textarea {...input}></textarea>
    </div>
  );
}

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

