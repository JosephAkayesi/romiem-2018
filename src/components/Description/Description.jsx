import React from 'react';
import './Description.css';
import logo from './logo.svg';

const Description = () => (
  <div className="Description">
    <h1>romiem</h1>
    <img className="Description__Logo" src={logo} alt="Romiem"/>
    <p>I’m a Product Designer and Developer with over 12 years of industry experience in crafting interfaces that users can intuitively understand and love.</p>
    <p>I am based in London, UK — working as a UX Designer for Winton, having previously worked for Microsoft and the BBC.</p>
    <p>My experience covers Visual &amp; Interaction design, Prototyping, Wireframing, Information Architecture, Animation and Coding.</p>
  </div>
);

export default Description;
