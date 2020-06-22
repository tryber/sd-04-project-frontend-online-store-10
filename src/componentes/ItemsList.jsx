import React from 'react';
import ItemCard from './ItemCard';
import * as API from '../services/api';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      loading: true,
    };
  }

  componentDidUpdate(nextProps) {
    const { categoryId, searchText } = nextProps;
    if (categoryId || searchText) {
      API.getProductsFromCategoryAndQuery(categoryId, searchText).then((data) => {
        const { results } = data;
        this.setState({ items: results, loading: false });
      });
    }
  }

  render() {
    const { items, loading } = this.state;
<<<<<<< HEAD
    if (loading || !items) {
      console.log(`teste ${items}`);
=======
    if (loading) {
      /* console.log(`teste ${items}`); */
>>>>>>> 882c4cb987dee6c3c09e93bc68dc3767bcfaa2aa
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
