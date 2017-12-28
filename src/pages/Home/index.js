import React, { Component } from 'react';
import './Home.css';
import { Categories } from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';
import { Upcoming } from '../../containers/UpcomingEvents';
import { Link } from 'react-router-dom';
import SearchForm from '../../components/SearchForm';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <h1 className="App-title"><Link to="/">AlMakinah Summit</Link></h1>
        <Link to="/"><img className="logo" src="logo.png" alt="Logo"/></Link>
        <SearchForm />
        <HotestEvent />
        <Upcoming />
        <Categories />
      </div>
    );
  }
}

export default Home;