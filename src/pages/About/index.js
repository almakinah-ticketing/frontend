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
        <div className="page">
          <div className="about-container">
            <div className="about-content">
              <h2>About the Summit</h2>
              <div className="about-paragraphs">
                <p>
                  Running for the first annual cycle in our new home in budding tech hub Maadi, the summit is a concatenation of everything AlMakinah believes in: code, community, and continuous learning. Over the course of two weeks are workshops, panel discussions, talks, and meetups across a diverse range of technologies and projects, all driven by the desire to fuse technology, startup culture, and education to make our world more livable. Come build. Come connect. Come learn. But most importantly, come meet our mascot Makmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default About;