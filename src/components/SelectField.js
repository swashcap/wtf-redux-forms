import React, { PropTypes } from 'react';

export default function SelectField({ children, input, label, meta }) {
  return (
    <div className="pure-control-group">
      <label htmlFor={input.name}>{label}</label>
      <select id={input.name} {...input}>
        {children}
      </select>
    </div>
  );
}

SelectField.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};
