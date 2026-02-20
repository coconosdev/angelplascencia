import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">
        Designed &amp; built by{' '}
        <a
          href="https://www.linkedin.com/in/angel-p-16b037176"
          target="_blank"
          rel="noreferrer"
        >
          Angel Plascencia
        </a>{' '}
        &mdash; &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
