import React from 'react';
import SEO from './SEO';

const Layout = ({ children, ...seoProps }) => {
  return (
    <>
      <SEO {...seoProps} />
      {children}
    </>
  );
};

export default Layout;
