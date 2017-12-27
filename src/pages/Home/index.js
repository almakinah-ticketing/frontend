import React, { Component } from 'react';
import './Home.css';
import { Categories } from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';
import { Upcoming } from '../../containers/UpcomingEvents';
import { NavLink } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <h1 className="App-title">AlMakinah Summit</h1>
        <NavLink to="/"><img className="logo" src="logo.png" alt="Logo"/></NavLink>
        <SearchForm />
        <HotestEvent />
        <Upcoming />
        <Categories />
      </div>
    );
  }
}

export default Home;