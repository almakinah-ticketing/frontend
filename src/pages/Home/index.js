import React, { Component } from 'react';
import './Home.css';
import Categories from '../../containers/Categories';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <h2>Home Page</h2>
        <Categories />
      </div>
      );
  }
}

export default Home;