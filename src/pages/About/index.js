import React, {Component} from 'react';
import './About.css';

class About extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }

  render() {
    return(
      <div className="about">
        About
      </div>
      );
  }
}

export default About;