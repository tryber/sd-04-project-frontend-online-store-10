import React from 'react';
import './css/SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="main-search-bar">
        <label htmlFor="searchBar" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            className="input-search-bar"
            id="searchBar"
            type="text"
            onChange={this.props.onSearchTextChange}
            value={this.props.searchText}
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
