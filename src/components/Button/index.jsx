import React from 'react';
import './styles.scss';

const Button = ({ children, type = 'button', variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn--${variant}`} type={type} onClick={onClick}>
      <span className="btn__text">{children}</span>
    </button>
  );
};

export default Button;
