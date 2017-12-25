import React, { Component } from 'react';

export default class Categories extends Component {
	componentWillMount(){
		this.props.getCategories();

	}

  render(){
  	const {categories, loading, error} = this.props;
    return(
      <div>
        <h1>Categories</h1>
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



    )
  }

}