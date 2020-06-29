import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Categories from '../componentes/Categories';
import ItemsList from '../componentes/ItemsList';
import SearchBar from '../componentes/SearchBar';
import CartIcon from '../images/shopping-cart.png';
import * as API from '../services/api';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      categoryId: '',
      items: '',
      setItems: '',
      status: false,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  async setItems(e) {
    const categoryId = e.target.value;
    const { searchText } = this.state;
    API.getProductsFromCategoryAndQuery(categoryId, searchText)
      .then((data) => {
        this.setState({ items: data.results });
      });
  }

  render() {
    const { searchText, status, items } = this.state;
    return (
      <div className="home-container">
        <SearchBar
          onSearchTextChange={this.onSearchTextChange}
          searchText={searchText}
          className="searchBar"
        />
        <button
          type="button"
          className="btn-search-bar"
          onClick={this.setItems}
          data-testid="query-button"
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={CartIcon} alt="icone de carrinho de compras" className="cart-icon" />
        </Link>
        <div className="categories-container">
          <Categories onClick={this.setItems} />
        </div>
        <div className="items-container">
          <ItemsList items={items} status={status} />;
          </div>
      </div>
    );
  }
}

export default Home;
