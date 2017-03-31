import React, { PropTypes } from 'react';

export default function RecipeSelectorField({ input, meta }) {
  return (
    <fieldset>
      <legend>Recipe Type</legend>
      <label className="pure-radio" htmlFor={input.id}>
        <input type="radio" />
      </label>
    </fieldset>
  );
}

RecipeSelectorField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

