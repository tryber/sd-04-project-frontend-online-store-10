import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import DetailAddToCart from '../componentes/DetailAddToCart';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render() {
    const item = JSON.parse(localStorage.getItem('ItemDetails'))[0];
    console.log(item);
    const shipping = !item.shipping.free_shipping ? '' : 'Frete grátis';
    const soldQtt = item.sold_quantity;
    const qtt = item.available_quantity;
    const { redirect } = this.state;
    const { title, thumbnail, price } = item;
    if (redirect) { return <Redirect to="/" />; }
    return (
      <div data-testid="movie-details">
        <h1 data-testid="product-detail-name">{title}</h1>
        <img alt="Movie Cover" src={thumbnail} width="300px" />
        <p>{`Preço : R$${price}`}</p>
        <p>{`Unidades vendidas: ${soldQtt}`}</p>
        <p>{`Quantidade disponível: ${qtt}`}</p>
        <p>{shipping}</p>
        <DetailAddToCart />
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
