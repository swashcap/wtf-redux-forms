import React, { PropTypes } from 'react';

export default function TextField({ input, label, meta }) {
  return (
    <div className="pure-control-group">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

