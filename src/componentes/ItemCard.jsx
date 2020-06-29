import React from 'react';
import { Link } from 'react-router-dom';


class itemCard extends React.Component {
  constructor(props) {
    super(props);
    this.setQuantity = this.setQuantity.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.setCart = this.setCart.bind(this);
  }
  setQuantity() {
    const { item } = this.props;
    if (item.installments === null) {
      return '';
    }
    return item.installments.quantity;
  }

  async setCart() {
    const { item } = this.props;
    console.log(item);
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const cart = !shoppingCart ? [] : shoppingCart.map((itemCart) => { return (itemCart) })
    console.log(cart);
    if (shoppingCart !== null && shoppingCart !== []) {
      cart.push(item);
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } else {
      const NewCart = [];
      NewCart.push(item);
      localStorage.setItem('shoppingCart', JSON.stringify(NewCart));
    }
  }

  setLocalStorage() {
    const item = this.props;
    localStorage.setItem('ItemDetails', JSON.stringify(Object.values(item)));
  }
  render() {
    const { item } = this.props;
    const { thumbnail, title, id, price } = item;
    return (
      <div data-testid="product" className="item-card" >
        <img alt="item Cover" className="item-card-image" src={thumbnail} />
        <div className="item-card-body">
          <h4 className="item-card-title">{title}</h4>
          <p className="item-card-price">Preço: R${price}</p>
          <p className="item-card-quantity">Quantity: {this.setQuantity}</p>
          <Link data-testid="product-detail-link" onClick={this.setLocalStorage} to={`/item-details/${id}`} >Mostrar detalhes</Link>
          <button
            onClick={this.setCart}
            data-testid="product-add-to-cart"
          >
            Adicionar no carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default itemCard;
