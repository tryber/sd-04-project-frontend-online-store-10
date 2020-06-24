import React from 'react';
import ItemCard from './ItemCard';

class ItemsList extends React.Component {
constructor(props){
  super(props);
  
}

  render() {
    const { items } = this.props;
    {console.log(items)}
    if (!items) {
      return (
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      );
    }

    return (
      <div className="items-list">
        {items.map((item) => <ItemCard data-testid="product" item={item} /> )}
      </div>
    );
  }
}

ItemsList.defaultProps = {
  items: '',
}

export default ItemsList;
