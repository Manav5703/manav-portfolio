import React from 'react';
import '../components/_Footer.scss';


class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>Made by Manav Patel © {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;
