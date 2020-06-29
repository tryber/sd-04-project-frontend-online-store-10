import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../componentes/Cart';

function ShoppoingCart() {
  return (
    <div>
      <div>
        <Link to="/"><img src="../images/seta-voltar.png" alt="imagem de seta para voltar" /></Link>
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default ShoppoingCart;
