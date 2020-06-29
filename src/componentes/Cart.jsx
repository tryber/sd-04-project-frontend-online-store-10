import React, { Component } from 'react';
import ItemShoppingCart from './ItemShoppingCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.getItems = this.getItems.bind(this)
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.setState({ items: shoppingCart })
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
          <h3 data-testid="shopping-cart-empty-message" className="texto-caixa">
            Seu carrinho está vazio
          </h3>
        </div>
      );
    }
    return (
      <div>
        {items.map((item) => <ItemShoppingCart key={item.id} item={item} />)}
      </div>
    );
  }
}

export default Cart;
