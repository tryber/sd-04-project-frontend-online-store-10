import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import Categories from '../componentes/Categories';
import ItemsList from '../componentes/ItemsList';
import SearchBar from '../componentes/SearchBar';
import CartIcon from '../images/shopping-cart.png';

function Home() {
  return (
    <div className="home-container">
      <div className="nav-page">
        <SearchBar className="searchBar" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={CartIcon} alt="icone de carrinho de compras" className="cart-icon" />
        </Link>
      </div>

      <div className="content-container">
        <div className="categories-container"><Categories /></div>
        <div className="items-container">
          <ItemsList />
        </div>
      </div>

    </div>
  );
}

export default Home;
