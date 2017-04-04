import React, { PropTypes } from 'react';

import RecipesList from '../containers/RecipesList';

import './App.css';

export default function App({ children }) {
  return (
    <div>
      <header role="banner">
        <h1>WTF Redux Forms</h1>
      </header>
      <main role="main">
        <RecipesList />
        {children}
      </main>
      <footer role="contentinfo">
        <small>A project for experimenting with dynamic <a href="http://redux-form.com/">Redux Form</a> forms. Source <a href="https://github.com/swashcap/wtf-redux-forms">on GitHub</a>.</small>
      </footer>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

