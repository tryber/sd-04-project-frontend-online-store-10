import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import DetailAddToCart from '../componentes/DetailAddToCart';
import setToCart from '../services/utils';
import CartIcon from '../images/shopping-cart.png';


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render() {
    const item = JSON.parse(localStorage.getItem('ItemDetails'))[0];
    const shipping = !item.shipping.free_shipping ? '' : 'Frete grátis';
    const soldQtt = item.sold_quantity;
    const qtt = item.available_quantity;
    const { redirect } = this.state;
    if (redirect) { return <Redirect to="/" />; }
    return (
      <div data-testid="movie-details">
        <h1 data-testid="product-detail-name">{item.title}</h1>
        <img alt="Movie Cover" src={item.thumbnail} width="300px" />
        <p>{`Preço : R$${item.price}`}</p>
        <p>{`Unidades vendidas: ${soldQtt}`}</p>
        <p>{`Quantidade disponível: ${qtt}`}</p>
        <p>{shipping}</p>
        <DetailAddToCart />
        <div>
          <Link to="/">VOLTAR</Link>
          <button data-testid="product-detail-add-to-cart" onClick={() => { setToCart(item); }} >
            Adicionar no carrinho
            </button>
          <Link
            data-testid="shopping-cart-button" to="/shopping-cart"
          >
            <img src={CartIcon} alt="icone de carrinho de compras" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
