import React, {Component} from 'react';
import './About.css';

class About extends Component {
  componentWillMount() {
    const { handleNewSearchInput } = this.props;
    handleNewSearchInput('');
  }

  render() {
    return(
      <div className="about page">
        <h2>About the Summit</h2>
      </div>
      );
  }
}

export default About;