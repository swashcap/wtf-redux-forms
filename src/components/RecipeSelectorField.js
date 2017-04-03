import React, { PropTypes } from 'react';
import './RecipeSelectorField.css';

export default function RecipeSelectorField({ input, meta, recipes }) {
  return (
    <fieldset className="RecipeSelectorField">
      <legend>Recipe Type</legend>
      {recipes.map((recipe, index) => (
        <label
          className="pure-radio"
          htmlFor={`recipe-${recipe.id}`}
          key={index}
        >
          <input
            checked={input.value === recipe.id}
            id={`recipe-${recipe.id}`}
            onChange={() => input.onChange(recipe.id)}
            type="radio"
          />
          <strong>{recipe.name}</strong>
          <span>{recipe.summary}</span>
        </label>
      ))}
    </fieldset>
  );
}

RecipeSelectorField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

