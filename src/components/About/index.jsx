import React from 'react';
import Heading from '../Heading';
import { experienceData } from '../../data/experience';
import './styles.scss';

const yearsOfExperience = new Date().getFullYear() - 2015;

const stats = [
  { label: 'Years of Experience', value: `${yearsOfExperience}+` },
  { label: 'Companies', value: `${experienceData.length}+` },
  { label: 'Specialization', value: 'Front End' },
];

const About = () => {
  return (
    <div className="about">
      <Heading>About me</Heading>

      <div className="about__stats">
        {stats.map(({ label, value }) => (
          <div className="about__stat" key={label}>
            <span className="about__stat-value">{value}</span>
            <span className="about__stat-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="about__body">
        <p>
          I am a front-end engineer with over {yearsOfExperience} years of professional experience building
          scalable, accessible web applications in React and Angular. I have shipped production
          features across fintech, edtech, e-commerce, and healthcare SaaS products, working
          in remote-first environments with Agile teams.
        </p>
        <p>
          My core strengths are TypeScript, component architecture, state management with
          RxJS and Redux, design-system development in Storybook, and writing high-quality
          unit tests with Jest and Jasmine. I care deeply about performance, accessibility
          (WCAG), and clean maintainable code.
        </p>
        <p>
          I am open to senior front-end and full-stack roles where I can contribute to both
          product quality and team culture.
        </p>
      </div>
    </div>
  );
};

export default About;
