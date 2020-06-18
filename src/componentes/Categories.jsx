import React, { Component } from 'react';
import * as API from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = ({ categories: null });
  }

  componentDidMount() {
    API.getCategories().then((data) => {
      console.log(data);
      return this.setState({ categories: data });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ol>
        {categories.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ol>
    );
  }
}

export default Categories;
