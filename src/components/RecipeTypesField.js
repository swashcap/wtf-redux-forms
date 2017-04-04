import React, { PropTypes } from 'react';
import './RecipeTypesField.css';

export default function RecipesTypesField({ input, meta, types }) {
  return (
    <fieldset className="RecipeTypesField">
      {types.map(({ id, name, summary }, index) => (
        <label
          className="pure-radio"
          htmlFor={`type-${id}`}
          key={index}
        >
          <input
            checked={input.value === id}
            className="visuallyhidden"
            id={`type-${id}`}
            onChange={() => input.onChange(id)}
            type="radio"
            value={index}
          />
          <strong>{name}</strong>
          <span>{summary}</span>
        </label>
      ))}
    </fieldset>
  );
}

RecipesTypesField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  })),
};

