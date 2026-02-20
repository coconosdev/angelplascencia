import React from 'react';
import './styles.scss';
import Nav from '../Nav';
import Footer from '../Footer';

const PageWrapper = ({ children }) => {
  return (
    <div className="pageWrapper">
      <div className="star-wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Nav />
      <div className="mainWrapper">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;
