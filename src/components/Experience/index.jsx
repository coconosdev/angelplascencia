import React from 'react';
import Heading from '../Heading';
import ExperienceTimeline from '../ExperienceTimeline';
import { experienceData } from '../../data/experience';
import './styles.scss';

const Experience = () => {
  const reversedData = [...experienceData].reverse();

  return (
    <div className="experience-page">
      <Heading>Experience</Heading>
      <ExperienceTimeline items={reversedData} />
    </div>
  );
};

export default Experience;
