import React from 'react';
import Heading from '../Heading';
import CoolAccordion from '../CoolAccordion';
import juniperLogo from '../../images/logos/juniper.png';
import novaLogo from '../../images/logos/nova.png';
import webptLogo from '../../images/logos/webpt.png';
import dreamboxLogo from '../../images/logos/dreambox.png';
import repvueLogo from '../../images/logos/repvue.png';
import deckersLogo from '../../images/logos/deckers.png';
import kohoLogo from '../../images/logos/koho.png';
import transactLogo from '../../images/logos/transact.png';

import './styles.scss';

const experienceArray = [
  {
    id: '1',
    title: 'Front End Developer',
    dates: '2015 - 2017',
    place: 'Juniper Data Center',
    where: 'La Paz, México',
    page: 'https://www.juniperdatacenter.com',
    description: 'Developing and building sites from scratch, following the designs the most pixel-perfect possible.',
    skills: ['HTML5', 'LESS', 'CSS3'],
    logo: juniperLogo,
  },
  {
    id: '2',
    title: 'Front End Developer',
    dates: '2018 - 2019',
    place: 'Nova Solutions Systems',
    where: 'México City',
    page: 'https://www.novasolutionsystems.com',
    description: 'Developing reusable components using AngularJS, Angular and / or React for different projects.',
    skills: ['AngularJS', 'Angular', 'React', 'Jasmine', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: novaLogo,
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    dates: '2019 - 2020',
    place: 'WebPT',
    where: 'Remote',
    page: 'https://www.webpt.com',
    description:
      'Adding existing new pages and functionality to the existing PHP codebase and created several server-side RESTful APIs using Node/Express.',
    skills: ['PHP', 'Node', 'Express', 'HTML5', 'PostgreSQL', 'SASS', 'Git', 'SCRUM'],
    logo: webptLogo,
  },
  {
    id: '4',
    title: 'Front End Developer',
    dates: '2020 - 2022',
    place: 'DreamBox Learning',
    where: 'Remote',
    page: 'https://www.dreambox.com',
    description: 'Developing of multiple report pages mainly consisting of tables and graphs.',
    skills: ['Angular', 'RxJS', 'Storybook', 'Jasmine', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: dreamboxLogo,
  },
  {
    id: '6',
    title: 'Front End Developer',
    dates: '2022 - 2023',
    place: 'RepVue',
    where: 'Remote',
    page: 'https://www.repvue.com',
    description:
      'Developing Server Side Rendered Progressive Web Applications built with React, Next.js and browser APIs with a main focus on reports and graphs.',
    skills: ['React', 'Next.js', 'Typescript', 'Jasmine', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: repvueLogo,
  },
  {
    id: '7',
    title: 'Front End Developer',
    dates: '2023 - 2023',
    place: 'Deckers',
    where: 'Remote',
    page: 'https://www.deckers.com',
    description:
      'Developing Server Side Rendered Progressive Web Applications built with React, Next.js and browser APIs.',
    skills: ['React', 'Next.js', 'Storybook', 'Jasmine', 'Typescript', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: deckersLogo,
  },
  {
    id: '8',
    title: 'Front End Developer',
    dates: '2023 - 2024',
    place: 'KOHO',
    where: 'Remote',
    page: 'https://www.koho.ca',
    description: 'Developing Mobile Bank Application using Ionic',
    skills: ['Ionic', 'Angular', 'Storybook', 'Jasmine', 'Typescript', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: deckersLogo,
  },
  {
    id: '9',
    title: 'Front End Developer',
    dates: '2024 - Present',
    place: 'Transact Campus',
    where: 'Remote',
    page: 'https://www.transactcampus.com',
    description: 'Developing payments application for Campuses using ANgular',
    skills: ['Angular', 'Storybook', 'Jasmine', 'Typescript', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: deckersLogo,
  },
];

const Experience = () => {
  const reversedArray = [...experienceArray].reverse();
  return (
    <div className="experienceWrapper">
      <Heading>Experience</Heading>
      <CoolAccordion array={reversedArray} />
    </div>
  );
};

export default Experience;
