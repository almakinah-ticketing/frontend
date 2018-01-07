import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  render() {
    const {categories, loading, error, _filterEvents} = this.props;
    console.log(categories);
    return (
      <div>
        <h2>Categories</h2>     
        <ul>
        {
        	categories.map((category) => {
        		return (
        			<li>
                            <Link to={_filterEvents({categoryId: category.id})}><span className="category-name-link">{category.name}</span><img src={category.img} alt={category.name} /></Link>
                            </li>
        			)
        	})
        }
        </ul>  
      </div>
    )
  }
}