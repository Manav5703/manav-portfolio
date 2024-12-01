import React from 'react';
import Typewriter from '../components/Typewriter';
import { Scrollchor } from 'react-scrollchor';
import '../components/_Hero.scss';


class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Manav Patel" />
        <div className="hero-description">
          I am a 3rd year Computer Science student at Acadia university.
          Looking for internship.
          Open to work.<br />Check out my{' '}
          <Scrollchor to="#projects">side-projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
