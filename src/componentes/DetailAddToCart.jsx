import React from 'react';
// import PropTypes from 'prop-types';

class DetailAddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { quantity: 1 };

    this.plusQuantity = this.plusQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
  }
  plusQuantity() {
    this.setState((state) => {
      return { quantity: state.quantity + 1 };
    });
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
    return (
      <div>
        Quantidade
        <div>
          <button onClick={this.minusQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={this.plusQuantity}>+</button>
        </div>
        <button className="product-detail-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

// DetailAddToCart.propTypes = {
// };

export default DetailAddToCart;

