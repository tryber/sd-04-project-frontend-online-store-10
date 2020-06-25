import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Categories from '../componentes/Categories';
import ItemsList from '../componentes/ItemsList';
import SearchBar from '../componentes/SearchBar';
import CartIcon from '../images/shopping-cart.png';
import * as API from '../services/api';

function fetchAPI(categoryId, searchText) {
  API.getProductsFromCategoryAndQuery(categoryId, searchText)
    .then((data) => {
      console.log(data);
      this.setState({ status: true, items: data.results });
    });
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      categoryId: '',
      items: '',
      setItems: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);
    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  onClickSearchBar() {
    const { searchText } = this.state;
    fetchAPI('', searchText);
    setTimeout(() => {
      this.setState({ status: false });
    }, 100);
  }

  selectedCategory(e) {
    const categoryId = e.target.id;
    console.log(categoryId);
    fetchAPI(categoryId);
    setTimeout(() => {
      this.setState({ status: false });
    }, 100);
  }

  render() {
    const { searchText, categoryId, status, items } = this.state;
    return (
      <div className="home-container">
        <div className="nav-page">
          <SearchBar
            onSearchTextChange={this.onSearchTextChange}
            searchText={searchText}
            className="searchBar"
          />
          <button
            type="button"
            className="btn-search-bar"
            onClick={() => { this.onClickSearchBar(); }}
            data-testid="query-button"
          />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={CartIcon} alt="icone de carrinho de compras" className="cart-icon" />
          </Link>
        </div>
        <div className="content-container">
          <div className="categories-container">
            <Categories category={categoryId} getCategory={(e) => { this.selectedCategory(e); }} />
          </div>
          <div className="items-container">
            <ItemsList items={items} status={status} />;
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
