import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Button from '../Button';

const Main = () => {
  return (
    <>
      <h1 className="title">
        <span>Hi,</span> <span>I'm Angel Plascencia,</span> Software Engineer.
      </h1>
      {/* <h1 className="effect">
        Angel Plascencia
        <span>Angel Plascencia</span>
        <span>Angel Plascencia</span>
        <span>Software Engineer</span>
      </h1> */}
      <div className="button-wrapper">
        <Link to={`/contact`}>
          <Button>Contact me</Button>
        </Link>
      </div>
    </>
  );
};

export default Main;
