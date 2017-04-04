import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RecipesList from '../containers/RecipesList';

import './App.css';

function App({ activeId, children }) {
  return (
    <div>
      <header role="banner">
        <h1>
          <Link
            rel="home"
            to="/"
          >
            WTF Redux Forms
          </Link>
        </h1>
      </header>
      <main role="main">
        <RecipesList activeId={activeId} />
        {children}
      </main>
      <footer role="contentinfo">
        <small>A project for experimenting with dynamic <a href="http://redux-form.com/">Redux Form</a> forms. Source <a href="https://github.com/swashcap/wtf-redux-forms">on GitHub</a>.</small>
      </footer>
    </div>
  );
}

App.propTypes = {
  activeId: PropTypes.string,
  children: PropTypes.node,
};

export default connect((state, ownProps) => ({
  activeId: ownProps.params.id,
}))(App);

