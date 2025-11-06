import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
