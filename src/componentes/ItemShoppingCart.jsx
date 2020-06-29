import React from 'react';


class ItemShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ quantity: 1 });
    this.plusQuantity = this.plusQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
  }
  plusQuantity() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  minusQuantity() {
    this.setState((state) => {
      if (state.quantity <= 0) {
        return { quantity: 0 };
      }
      return { quantity: state.quantity - 1 };
    });
  }
  render() {
    const { quantity } = this.state;
    const { item } = this.props;
    const { thumbnail, title, price } = item;
    return (
      <div data-testid="product" className="item-card" >
        <img alt="item Cover" className="item-card-image" src={thumbnail} />
        <div className="item-card-body">
          <p className="item-card-title" data-testid="shopping-cart-product-name">{title}</p>
          <div>
            <button data-testid="product-decrease-quantity" onClick={this.minusQuantity}>-</button>
            <span
              className="item-card-quantity"
              data-testid="shopping-cart-product-quantity"
            >
              {quantity}
            </span>
            <button data-testid="product-increase-quantity" onClick={this.plusQuantity}>+</button>
          </div>
          <p className="item-card-price">R${price}</p>

        </div>
      </div>
    );
  }
}

export default ItemShoppingCard;
