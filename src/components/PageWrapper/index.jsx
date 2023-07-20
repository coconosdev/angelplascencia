import React from 'react';
import './styles.scss';
import Nav from '../Nav';
import Footer from '../Footer';

const PageWrapper = ({ children }) => {
  return (
    <div className="pageWrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Nav></Nav>
      <div className="mainWrapper">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default PageWrapper;
