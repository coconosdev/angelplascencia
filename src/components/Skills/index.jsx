import React from 'react';
import { Link } from 'react-router-dom';
import Cube from '../Cube';
import Heading from '../Heading';

import './styles.scss';

const Skills = () => {
  return (
    <div>
      <Heading>Skills</Heading>
      <p>
        The main area of my expertise is front end development building medium and big web apps with
        React, Angular, Javascript, Typescript, Next.js, REST, Redux,RxJS, Git, Jest, Jasmine,
        Karma, HTML, CSS, LESS, SASS, Redux, Bootstrap, Materialize and jQuery.
      </p>
      <p>
        I also have full stack experience, using technologies like Node, Express, PostgreSQL,
        GraphQL, MySQL and Spring.
      </p>
      <p>
        Visit my{' '}
        <a href="https://www.linkedin.com/in/angel-p-16b037176" target="_blank">
          linkedin
        </a>{' '}
        profile for more details or just <Link to={`/contact`}>contact me</Link>.
      </p>
      <Cube />
    </div>
  );
};

export default Skills;
