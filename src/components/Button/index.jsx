import React from 'react';
import './styles.scss';

const Button = ({ className, children, link }) => {
  return <button className="button">{children}</button>;
};

export default Button;
