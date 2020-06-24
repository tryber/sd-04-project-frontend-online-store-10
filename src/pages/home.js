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
  componentDidUpdate() {
    const { categoryId, searchText } = this.state;
    console.log(this.state.setItems);

    if (categoryId && !searchText) {
      API.getProductsFromCategoryAndQuery(categoryId, searchText).then((data) => {
        const { results } = data;
        this.setState({ setItems: results });
      });
    } else if (categoryId || searchText) {
      API.getProductsFromCategoryAndQuery(categoryId, searchText).then((data) => {
        const { results } = data;
        this.setState({ items: results });
      });
    }
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
    this.setState({ status: true });
    const items = this.state.items;
    this.setState({ setItems: items });
  }

  render() {
    const { searchText, categoryId, status, setItems } = this.state;
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
            onClick={this.onClick}
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
              searchText={searchText}
              categoryId={categoryId}
              items={setItems}
              status={status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
