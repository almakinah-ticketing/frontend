import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className="Footer clearfix">
        <p className="copyrights pull-start">&copy; 2017 AlMakinah</p>
        <nav className="contact-nav pull-end">
          <ul>
            <li><a href="mailto:info@almakinah.com"><i className="fas fa-envelope icons"></i></a></li>
            <li><a href="https://www.facebook.com/almakinah"><i className="fab fa-facebook-f icons"></i></a></li>
            <li><a href="https://twitter.com/almakinahschool"><i className="fab fa-twitter icons"></i></a></li>
            <li><a href="https://www.instagram.com/almakinah"><i className="fab fa-instagram icons"></i></a></li>
          </ul>
        </nav>
      </div>
      );
  }
}

export default Footer;