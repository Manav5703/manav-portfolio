import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import '../components/_Navbar.scss';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.navBar = React.createRef();  // Create ref using React.createRef()
  }

  componentDidMount() {
    this.navBar.current.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document
          .getElementById('projects')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Contact') {
        document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref={this.navBar}>  {/* Use the new ref */}
          <Scrollchor to="#projects">Projects</Scrollchor>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </nav>
      </div>
    );
  }
}

export default Navbar;
