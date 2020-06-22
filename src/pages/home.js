import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Categories from '../componentes/Categories';
import ItemsList from '../componentes/ItemsList';
import SearchBar from '../componentes/SearchBar';
import CartIcon from '../images/shopping-cart.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      categoryId: '',
      items: null,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedCategoryChange = this.onSelectedCategoryChange.bind(this);
  }
  
  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  onSelectedCategoryChange(e) {
    const value = e.target.value;
    this.setState({ categoryId: value });
  }

  render() {
    const { searchText, categoryId } = this.state;
    return (
      <div className="home-container">
        <div className="nav-page">
          <SearchBar
            onSearchTextChange={this.onSearchTextChange}
            searchText={searchText}
            className="searchBar"
          />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={CartIcon} alt="icone de carrinho de compras" className="cart-icon" />
          </Link>
        </div>
        <div className="content-container">
          <div className="categories-container">
            <Categories
              category={categoryId}
              onSelectedCategoryChange={this.onSelectedCategoryChange}
            />
          </div>
          <div className="items-container">
            <ItemsList searchText={searchText} categoryId={categoryId} />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
