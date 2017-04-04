import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { fetchRecipes } from '../actions';

class RecipesList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRecipes());
  }
  
  wat(event) {
    event.preventDefault();
    debugger;
    push('/new');
  }


  render() {
    const { activeId, recipes } = this.props;

    return (
      <nav className="RecipesList" role="navigation">
        <div className="pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
            {recipes.map(({ id, name }, index) => {
              const path = `/edit/${id}`;

              return (
                <li className="pure-menu-item" key={index}>
                  <a
                    className={`pure-menu-link ${id === activeId ? 'pure-menu-selected' : ''}`}
                    onClick={this.wat.bind(this)}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="pure-button"
          title="Create a new recipe"
          to="/new"
          type="button"
        >
          New Recipe
        </button>
      </nav>
    );
  }
}

RecipesList.propTypes = {
  activeId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

function mapStateToProps({ recipes }, ownProps) {
  return {
    // WTF, redux-router. WTF.
    activeId: ((ownProps || {}).params || {}).id || '',
    recipes,
  };
}

export default connect(mapStateToProps)(RecipesList);


