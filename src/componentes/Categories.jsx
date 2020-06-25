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
    const { getCategory } = this.props;
    const { categories, loading } = this.state;
    if (loading) { return (<Loading />); }
    return (
      <div onClick={getCategory} className="category-list" >
        {categories.map(({ id, name }) => (
          <div data-testid="category" className="categories" key={name} >
            <label htmlFor={id}>
              <input
                name="categories"
                id={id}
                value={id}
                type="radio"
              />
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
