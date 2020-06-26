import React from 'react';
import ItemCard from './ItemCard';
// import * as API from '../services/api';

class ItemsList extends React.Component {

  render() {
    const { items } = this.props;
    if (!items) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }

    return (
      <div className="items-list">
        {items.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    );
  }
}

export default ItemsList;
