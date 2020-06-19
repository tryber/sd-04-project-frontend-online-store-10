import React from 'react';
import { Link } from 'react-router-dom';


class itemCard extends React.Component {
  render() {
    const { item } = this.props;
    const { thumbnail, title, price } = item;
    return (
      <div className="item-card">
        <img alt="item Cover" className="item-card-image" src={thumbnail} />
        <div className="item-card-body">
          <h2 className="item-card-title">{title}</h2>
          <p className="item-card-subtitle">{price}</p>
          <Link to="item-details">Mostrar detalhes</Link>
        </div>
      </div>
    );
  }
}

export default itemCard;
