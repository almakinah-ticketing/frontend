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

        <h3>Categories</h3>     
        <div className="row">

        {
        	categories.map((category) => {
        		return (
        			<div className="col"> 
             
               <Link to={_filterEvents({categoryId: category.id})}><span className="category-name-link">{category.name}</span><img src={category.img} alt={category.name} /></Link>
             </div>
        		)

        	})
        }
        </div>  
      </div>
    )
  }
}