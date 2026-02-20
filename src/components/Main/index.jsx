import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './styles.scss';

const Main = () => {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__eyebrow">Hello, I am</div>

      <h1 className="hero__name">
        Angel Plascencia
      </h1>

      <p className="hero__subtitle">
        <span className="hero__subtitle-text">Front-End Engineer</span>
        <span className="hero__subtitle-caret" aria-hidden="true" />
      </p>

      <div className="hero__actions">
        <Link to="/contact">
          <Button>Contact me</Button>
        </Link>
        <a href="/Resume Angel Plascencia.pdf" download className="hero__download">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Main;
