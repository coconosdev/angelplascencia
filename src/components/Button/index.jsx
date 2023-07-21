import React from 'react';
import './styles.scss';

const Button = ({ className, children, link, type }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
