import React, { Component } from 'react';
import Categories from '../../containers/Categories';
import HotestEvent from '../../containers/HotestEvent';

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

export default class Home extends Component {
    render (){
        return (
            <div>
                <h2>Home Page</h2>
                <Categories />
                
            </div>
        )
    }
}