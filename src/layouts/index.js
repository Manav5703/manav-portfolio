import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import '../fontawesome';

const Layout = ({ children, data, pageTitle, pageDescription, pageKeywords }) => (
  <div className='container-lg'>
    <Helmet
      title={pageTitle || data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: pageDescription || 'Sample description' },
        { name: 'keywords', content: pageKeywords || 'sample, something' },
      ]}
    />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageKeywords: PropTypes.string,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
