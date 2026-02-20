import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import SkillsGrid from '../SkillsGrid';
import './styles.scss';

const Skills = () => {
  return (
    <div className="skills-page">
      <Heading>Skills</Heading>

      <p className="skills-page__summary">
        I specialize in front-end engineering with deep expertise in React, Angular, TypeScript,
        and Next.js. My toolkit includes state management with RxJS and Redux, component
        documentation via Storybook, and testing with Jest and Jasmine. I am proficient in modern
        CSS with SASS/SCSS, and have full-stack experience with Node.js, Express, PostgreSQL,
        GraphQL, and REST APIs.
      </p>

      <SkillsGrid />

      <p className="skills-page__cta">
        View my full history on{' '}
        <a href="https://www.linkedin.com/in/angel-p-16b037176" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{' '}
        or <Link to="/contact">get in touch</Link>.
      </p>
    </div>
  );
};

export default Skills;
