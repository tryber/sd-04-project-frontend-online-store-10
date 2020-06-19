import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { searchText, onClick } = this.props;
    return (
      <div className="main-search-bar">
        <label htmlFor="search">
          <input
            className="input-search-bar"
            type="text"
            name="search"
            value={searchText}
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          />
          <button
            type="button"
            className="btn-search-bar"
            onClick={onClick}
          />
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchBar;
