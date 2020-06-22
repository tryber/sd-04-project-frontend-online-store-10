import React, { Component } from 'react';
import ItemCard from './ItemCard';


class Cart extends Component() {
  constructor(props) {
    super(props);
    this.state = { items: null };
  }

  ComponentDidMount() {
    if (this.props.selectedItems) {
      this.setState({ items: this.props.selectedItems });
    }
  }

  render() {
    const { items } = this.state;

    if (!items) {
      return (
        <div>
          <img
            className="caixa-vazia"
            src="../images/caixa-de-papelao-vazia.jpg"
            alt="Imagem de caixa vazia"
          />
          <h3 data-testid="shopping-cart-button" className="texto-caixa">
            Seu carrinho está vazio
          </h3>
        </div>
      );
    }
    return (
      <div>
        {items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    );
  }
}

export default Cart;
