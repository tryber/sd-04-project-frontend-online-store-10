import React from 'react';
import ItemCard from './ItemCard';
import * as API from '../services/api';


class ItemsList extends React.Component {
constructor(props){
  super(props);
  this.state = {
    items: null,
    loading: true,
  }
  this.props = ({ categoryId: null, searchText: null })
}



async UNSAFE_componentWillUpdate(nextProps){
    const { categoryId, searchText } = nextProps;
    console.log(nextProps);
    console.log(this.props);
    
    if(categoryId || searchText){
     await API.getProductsFromCategoryAndQuery(categoryId, searchText).then((data) => {
        const {results} = data;
        console.log(results);

         this.setState({ items: results, loading: false });
      });
    }
  }
  render() {
    const { items, loading } = this.state;
    if (loading || !items) {
      console.log("teste" + items);
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
