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
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedCategoryChange = this.onSelectedCategoryChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }

  onSelectedCategoryChange(e) {
    const value = e.target.id;
    this.setState({ categoryId: value });
  }

  onClick() {
    const { categoryId, searchText } = this.state;
    API.getProductsFromCategoryAndQuery(categoryId, searchText)
      .then(data => {
        console.log(data);
        this.setState({ status: true, items: data.results });
      })
    setTimeout(() => {
      this.setState({ status: false });
    }, 1000);
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
            onClick={() => { this.onClick() }}
            data-testid="query-button"
          />
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={CartIcon} alt="icone de carrinho de compras" className="cart-icon" />
          </Link>
        </div>
        <div className="content-container">
          <div className="categories-container">
            <Categories
              category={categoryId} onSelectedCategoryChange={this.onSelectedCategoryChange}
            />
          </div>
          <div className="items-container">
            <ItemsList
              items={items}
              status={status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
