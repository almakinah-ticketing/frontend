import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="stick-footer-down">
        <div className="App-footer clearfix">
          <p className="copyrights pull-start">&copy; 2018 AlMakinah</p>
          <nav className="contact-nav pull-end">
            <ul>
              <li><a href="mailto:info@almakinah.com"><FontAwesome className="fas fa-envelope icons" /></a></li>
              <li><a href="https://www.facebook.com/almakinah"><FontAwesome className="fab fa-facebook-f icons" /></a></li>
              <li><a href="https://twitter.com/almakinahschool"><FontAwesome className="fab fa-twitter icons" /></a></li>
              <li><a href="https://www.instagram.com/almakinah"><FontAwesome className="fab fa-instagram icons" /></a></li>
            </ul>
          </nav>
        </div>
      </div>
      );
  }
}

export default Footer;