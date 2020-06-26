import React, { Component } from 'react';
import * as API from '../services/api';
import Loading from './Loanding';
import './css/Categories.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      categories: '',
      loading: true,
    });
  }

  componentDidMount() {
    API.getCategories().then((data) => this.setState({ categories: data, loading: false }));
  }

  render() {
    const { onChange } = this.props;
    const { categories, loading } = this.state;
    if (loading) { return (<Loading />); }
    return (
      <form
        onChange={onChange}
        className="category-list"
      >
        {categories.map(({ id, name }) => (
          <label
            className="categories"
            key={name}
            htmlFor={id}
            data-testid="category"
          >
            <input
              name="categories"
              id={id}
              value={id}
              type="radio"
            />
            {name}
          </label>
        ))}
      </form>
    );
  }
}

export default Categories;
