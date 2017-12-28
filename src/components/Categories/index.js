import React, { Component } from 'react';

export default class Categories extends Component {
  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  render() {
    const {categories, loading, error} = this.props;
    console.log(categories);
    return (
      <div>
        <h2>Categories</h2>
       
        {
        	categories.map((category) => {
        		return (
        			<div>{category.name}</div>

        			)

        	})
        }  
      </div>
    )

  }
}