import React from 'react';
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
            data-testid="home-initial-message"
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

export default SearchBar;
