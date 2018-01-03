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
                            <h3><Link to={_filterEvents({categoryId: category.id})}>{category.name}</Link></h3>
                            <Link to={_filterEvents({categoryId: category.id})}><img src={category.img} alt={category.name} /></Link>
                            </li>
        			)
        	})
        }
        </ul>  
      </div>
    )
  }
}