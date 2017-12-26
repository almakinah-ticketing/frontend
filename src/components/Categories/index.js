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
        <h3>Categories</h3>
        {console.log("Categories in state right now: ")}
        {console.log(categories)}
        {
      	   categories.map((category) => {
      	     return (
              <div>{category.name}</div>
              )
           })
         }
      </div>
      );
  }
}