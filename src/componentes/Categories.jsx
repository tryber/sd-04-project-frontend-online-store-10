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
      <div onChange={this.props.onSelectedCategoryChange} className="category-list">
        {categories.map(({ id, name }) => (
          <label data-testid="category" htmlFor={id} key={id}>
            <input
              name="categories"
              id={id}
              value={this.props.category}
              type="radio"
            />
            {name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
