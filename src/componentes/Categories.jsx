import React, { Component } from 'react';
import * as API from '../services/api';
import Loading from './Loanding';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      categories: null,
      loading: true,
    });
  }

  componentDidMount() {
    API.getCategories().then((data) => this.setState({ categories: data, loading: false }));
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) { return (<Loading />); }
    return (
      <ol>
        {categories.map(({ id, name }) => (
          <li className="category-list">
            <label data-testid="category" htmlFor={id}>
              <input name="categories" id={id} value={id} type="radio" />
              {name}
            </label>
          </li>
        ))}
      </ol>
    );
  }
}

export default Categories;
