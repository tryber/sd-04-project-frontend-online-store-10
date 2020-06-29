import React from 'react';


class ItemShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.setQuantity = this.setQuantity.bind(this);
    this.state = ({ quantity: 1 })
  }
  setQuantity() {
    const { item } = this.props;
    if (item.installments === null) {
      return '';
    }
    return item.installments.quantity;
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
            <button>-</button>
            <span
              className="item-card-quantity"
              data-testid="shopping-cart-product-quantity"
            >
              {quantity}
            </span>
            <button>+</button>
          </div>
          <p className="item-card-price">R${price}</p>

        </div>
      </div>
    );
  }
}

export default ItemShoppingCard;
