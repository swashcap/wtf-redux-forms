import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipesForm from '../components/RecipesForm';

import { fetchRecipes } from '../actions/';
import './App.css';

const DEFAULT_TYPE_ID = '100';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const { recipes } = this.props;

    const selectedRecipe = recipes.find(({ id }) => id === DEFAULT_TYPE_ID);
    const recipeInputs = selectedRecipe ?
      selectedRecipe.recipeInputs :
      [];
    const initialValues = {
      recipeInputs: recipeInputs.map((recipeInput) => (
        'defaultValue' in recipeInput ? recipeInput.defaultValue : ''
      )),
      type: DEFAULT_TYPE_ID,
    };

    return (
      <div>
        <header role="banner">
          <h1>WTF Redux Forms</h1>
        </header>
        <main role="main">
          <RecipesForm
            initialValues={initialValues}
            recipeInputs={recipeInputs}
            recipes={recipes}
          />
        </main>
        <footer role="contentinfo">
          <small>A project for experimenting with dynamic <a href="http://redux-form.com/">Redux Form</a> forms. Source <a href="https://github.com/swashcap/wtf-redux-forms">on GitHub</a>.</small>
        </footer>
      </div>
    );
  }
}

export default connect(({ recipes }) => ({ recipes }))(App);
