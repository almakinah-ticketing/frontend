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
                    The summit is our one-stop-shop, entrepreneurship marathon! 
                    We promise that the world comes to AlMakinah, 
                    and thanks to an incredible level of commitment from our tireless team and partners, we deliver. 
                    Thought leaders, media mavens, tech-legends and power player investors gather to share their experience,
                    support and invest in the Middle East & Africa’s flourishing entrepreneurial ecosystem.
                    From workshops, inspiring talks, and panel discussions to startup stations, pitch competitions,
                    and networking platforms with industry experts. Whoever you are, you’ll find a place for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default About;