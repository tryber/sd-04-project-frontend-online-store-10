import React from 'react';
import { Link } from 'react-router-dom';


class itemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="item-card" >
        <img alt="item Cover" className="item-card-image" src={item.thumbnail} />
        <div className="item-card-body">
          <h2 className="item-card-title">{item.title}</h2>
          <p className="item-card-subtitle">{item.price}</p>
          <Link to="item-details">Mostrar detalhes</Link>
        </div>
      </div>
    );
  }
}

export default itemCard;
