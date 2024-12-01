import React from 'react';
import '../components/_Contact.scss';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:manavpatel5703@gmail.com">
            Gmail
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/manavpatel5703"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/Manav5703">
            github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
