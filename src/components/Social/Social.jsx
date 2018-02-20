import React from 'react';
import './Social.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faDribbble, faGithub, faTwitch } from '@fortawesome/fontawesome-free-brands';

const Social = () => (
  <div className="Social">
    <a href="https://twitter.com/romiem"><FontAwesomeIcon icon={faTwitter}/></a>
    <a href="https://www.linkedin.com/in/rohitmistry"><FontAwesomeIcon icon={faLinkedin}/></a>
    <a href="https://dribbble.com/romiem"><FontAwesomeIcon icon={faDribbble}/></a>
    <a href="https://github.com/romiem"><FontAwesomeIcon icon={faGithub}/></a>
  </div>
);

export default Social;
