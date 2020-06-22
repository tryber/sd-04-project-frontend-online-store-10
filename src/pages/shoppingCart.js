import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../componentes/Cart';

function ShoppoingCart() {
  return (
    <div>
      <Cart />
      <Link to="/"><img src="../images/seta-voltar.png" alt="imagem de seta para voltar" /></Link>
    </div>
  );
}

export default ShoppoingCart;
