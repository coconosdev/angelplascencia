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
        Front-end developer with {yearsExperience.replace('about', '')} of experience. I have honed
        my skills in both Angular and React, allowing me to seamlessly adapt to diverse projects.
        Moreover, my proficiency in supporting back-end development ensures a cohesive and efficient
        collaboration with full-stack teams. I am motivated by the opportunity that software
        provides to positively impact the life of an individual, and the world as a whole.
      </p>
      <p>
        I like the front end spectrum of development but nowadays interested in a full stack future.
      </p>
    </div>
  );
};

export default About;
