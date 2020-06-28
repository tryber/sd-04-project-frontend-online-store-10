import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      loading: true,
      redirect: false,
      shipping: '',
    };
  }

  componentDidMount() {
    const itemSelected = JSON.parse(localStorage.getItem('ItemDetails'));
    const shipping = itemSelected[0].shipping.free_shipping ? 'Frete grátis' : '';
    
    this.setState({ item: itemSelected[0],shipping });

  }

  componentDidUpdate(){
        console.log(this.state.item);
  }

  render() {
    const { redirect, item } = this.state;
    const { title, thumbnail, price, available_quantity, sold_quantity } = item;
    if (redirect) { return <Redirect to="/" />; }
    return (
      <div data-testid="movie-details">
        <h1 data-testid="product-detail-name">{title}</h1>
        <img alt="Movie Cover" src={thumbnail} width="300px" />
        <p>{`Storyline: `}</p>
        <p>{`Preço : R$${price}0`}</p>
        <p>{`Unidades vendidas: ${sold_quantity}`}</p>
        <p>{`Quantidade disponível: ${available_quantity}`}</p>
        <div>
          <Link to={`/movies/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
