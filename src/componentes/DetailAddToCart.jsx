/*
9. Adicionar um produto ao carrinho a partir de sua tela de exibição detalhada

- Poder adicionar produtos ao carrinho a partir de sua tela de exibição detalhada será um canal importante de conversões de venda.

- Adicione o atributo data-testid com o valor product-detail-add-to-cart no elemento que possui a ação de adicionar o produto ao carrinho de compras.

Na exibição detalhada do produto, permitir adicionar o produto ao carrinho e alterar sua quantidade (botões (-) e (+)). A quantidade não pode ser negativa.

- Card 09
DetailAddToCart
*/
import React from 'react';
// import PropTypes from 'prop-types';

class DetailAddToCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

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
      if (state.quantity <= 0 ) {
        return { quantity: 0 };
      } else {
      return { quantity: state.quantity - 1 };
      }
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

