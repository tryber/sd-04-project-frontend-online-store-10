import React from 'react';
import { Link } from 'react-router-dom';


class itemCard extends React.Component {
  constructor(props) {
    super(props);
    this.setQuantity = this.setQuantity.bind(this);
  }
  setQuantity() {
    const { item } = this.props;
    if (item.installments === null) {
      return '';
    }
    return item.installments.quantity;
  }
  render() {
    const { item } = this.props;
    const { thumbnail, title, id, price } = item;
    return (
      <div data-testid="product" className="item-card" >
        <img alt="item Cover" className="item-card-image" src={thumbnail} />
        <div className="item-card-body">
          <h4 className="item-card-title">{title}</h4>
          <p className="item-card-price">{price}</p>
          <p className="item-card-quantity">Quantity: {this.setQuantity}</p>

          <Link to={`/item-details/${id}`} >Mostrar detalhes</Link>
        </div>
      </div>
    );
  }
}

export default itemCard;
