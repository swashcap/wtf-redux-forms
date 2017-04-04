import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import map from 'lodash/map';

import './RecipesList.css';

import { fetchTypes } from '../actions';

class RecipesList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchTypes());
  }
  
  render() {
    const { activeId, recipes } = this.props;

    return (
      <nav className="RecipesList" role="navigation">
        <Link
          className="pure-button"
          title="Create a new recipe"
          to="/new"
        >
          New Recipe
        </Link>
        <div className="pure-menu">
          <span className="pure-menu-heading">Saved Recipes</span>
          <ul className="pure-menu-list">
            {map(recipes, ({ name }, id) => {
              const className = 
                `pure-menu-item ${id === activeId ? 'pure-menu-selected' : ''}`;

              return (
                <li className={className} key={id}>
                  <Link
                    className="pure-menu-link"
                    to={`/edit/${id}`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

RecipesList.propTypes = {
  activeId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  recipes: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(({ recipes }) => ({ recipes }))(RecipesList);

