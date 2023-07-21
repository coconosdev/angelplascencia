import React from 'react';
import './styles.scss';

const Heading = ({ children }) => {
  return (
    <h1>
      {children.split(' ').map((element) => {
        return <span key={element}>{element} </span>;
      })}
    </h1>
  );
};

export default Heading;
