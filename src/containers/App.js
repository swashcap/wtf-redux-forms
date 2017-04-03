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

    const inputs = recipes.reduce((memo, { id, inputs }) => (
      id === DEFAULT_TYPE_ID ? inputs : memo
    ), []);
    const initialValues = {
      inputs,
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
            inputs={inputs}
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
