import React, { Component } from 'react';
import './Home.css';
import {Categories} from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <h2>Home Page</h2>

        <HotestEvent />

        <Categories />
      </div>
    );
  }
}

export default Home;