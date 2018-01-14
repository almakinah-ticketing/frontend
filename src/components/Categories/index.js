import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { rootApi } from '../../apiConfig';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // backgroundImages: [],
      categories: [],
      counter: -1
    }
    this._chunkArray = this._chunkArray.bind(this);
  }

  componentWillMount() {
    const {
      getCategories
    } = this.props;
    getCategories();
  }

  componentWillReceiveProps(nextProps) {
    const { categories } = nextProps;
    if (categories.length !== 0) {
      const categoriesCopy = categories.slice(0);
      const newCategories = this._chunkArray(categoriesCopy, 3);
      // var backgroundImages = [];
      // categories.map((category, index) => {
      //   const style = {
      //     backgroundImage: `url(${index}.jpeg)`,
      //     opacity: 0.7
      //   }
      //   backgroundImages.push(style); 
      // });
      this.setState({
        // backgroundImages: backgroundImages,
        categories: newCategories
      });
    }
  }

  _chunkArray(myArray, chunk_size) {
    var results = []; 
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

  render() {
    const {loading, error, _filterEvents} = this.props;
    const {categories} = this.state;
    return (
      <div className="categories container">
        <h3>Categories</h3> 
        {
          (categories.length === 0)
          ? (loading)
            ? <p className="loading-message">Loading categories...</p>
            : (error)
              ? <p className="error-message">Oops, something went wrong!</p>
              : null
      	   : categories.map((smallArray, index) => {
            return (
                <div className="row">
                  {
                    smallArray.map((category, index) => {
                      this.state.counter++;
                      return (
                        <li id={`image-${this.state.counter}`} className="list-unstyled col-sm-4 col-md-4 col-lg-4 col-xl-4 category" > 
                          <Link to={_filterEvents({categoryId: category.id})}>{category.name}</Link>
                        </li>
                        )
                    })
                  }
                </div>
              );
          })
         }
      </div>
    )
  }
}