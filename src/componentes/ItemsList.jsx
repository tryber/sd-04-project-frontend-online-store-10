import React from 'react';
import ItemCard from './ItemCard';
import * as API from '../services/api';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'empty',
      items: null,
    };
  }

  componentDidMount() {
    const { categoryId, query } = this.props;
    if (categoryId || query) {
      API.getProductsFromCategoryAndQuery(categoryId, query).then((items) => {
        this.setState({ items, status: 'loaded' });
      });
    }
  }

  render() {
    const { status, items } = this.state;
    if (status === 'empty') {
      return (<h2 data-testeid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h2>);
    }
    return (
      <div className="items-list">
        {items.map((item) => <ItemCard key={item.title} movie={item} />)}
      </div>
    );
  }
}

export default ItemsList;
