import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../componentes/Loanding';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        storyline: '',
        genre: '',
        rating: 0,
        subtitle: '',
        imagePath: '',
        id: '',
      },
      loading: true,
      redirect: false,
    };
  }

  render() {
    const { loading, redirect } = this.state;
    const { item } = this.props;
    if (redirect) { return <Redirect to="/" />; }
    if (loading) { return <Loading />; }
    const { storyline, imagePath, price, rating, title, subtitle, id, installments } = item;
    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`/${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Price: ${price}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Quantity: ${installments.quantity}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
