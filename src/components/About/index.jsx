import React from 'react';
import { formatDistance } from 'date-fns';
import Heading from '../Heading';

import './styles.scss';

const About = () => {
  const startDate = new Date('06/20/2015');
  const today = new Date();
  const yearsExperience = formatDistance(startDate, today);

  return (
    <div>
      <Heading>About me</Heading>
      <p>
        Front-end developer with {yearsExperience} of experience. Comfortable working in both
        Angular and React environments and supporting back-end development. Adept at collaborating
        with cross-functional teams to deliver high-quality, scalable solutions. Experience in
        test-driven development under Agile methodologies.
      </p>
      <p>
        I like the front end spectrum of development but nowadays interested in a full stack future.
      </p>
      <p>Love that the projects I do have an impact on the people who use them.</p>
    </div>
  );
};

export default About;
