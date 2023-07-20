import React from 'react';
import './styles.scss';

const Cube = () => {
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="container">
          <div className="slide x"></div>
          <div className="slide y"></div>
          <div className="slide z"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Cube;
