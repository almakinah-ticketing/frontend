import React, { Component } from 'react';
import './Home.css';
import {Categories} from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';
import { Upcoming } from '../../containers/Events';


class Home extends Component {
  render() {
    return(
      <div className="Home">
        <h2>Home Page</h2>

        <HotestEvent />
        <Upcoming />
        <Categories />
      </div>
    );
  }
}

export default Home;