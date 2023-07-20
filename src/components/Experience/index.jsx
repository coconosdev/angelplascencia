import React from 'react';
import CoolAccordion from '../CoolAccordion';
import juniperLogo from '../../images/logos/juniper.png';
import novaLogo from '../../images/logos/nova.png';
import webptLogo from '../../images/logos/webpt.png';
import dreamboxLogo from '../../images/logos/dreambox.png';
import findepLogo from '../../images/logos/findep.png';
import repvueLogo from '../../images/logos/repvue.png';
import deckersLogo from '../../images/logos/deckers.png';

import './styles.scss';

const experienceArray = [
  {
    id: '1',
    title: 'Front End Developer @ Juniper Data Center',
    dates: '2015 - 2017',
    where: 'La Paz, México',
    page: 'https://www.juniperdatacenter.com',
    description:
      'Developing and building sites from scratch, following the designs the most pixel-perfect possible.',
    skills: ['HTML5', 'LESS', 'CSS3'],
    logo: juniperLogo,
  },
  {
    id: '2',
    title: 'Front End Developer @ Nova Solutions Systems',
    dates: '2018 - 2019',
    where: 'México City',
    page: 'https://www.novasolutionsystems.com',
    description:
      'Developing reusable components using AngularJS, Angular and / or React for different projects.',
    skills: ['AngularJS', 'Angular', 'React', 'Jasmine', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: novaLogo,
  },
  {
    id: '3',
    title: 'Full Stack Developer @ WebPT',
    dates: '2019 - 2020',
    where: 'Remote',
    page: 'https://www.webpt.com',
    description:
      'Adding existing new pages and functionality to the existing PHP codebase and created several server-side RESTful APIs using Node/Express.',
    skills: ['PHP', 'Node', 'Express', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: webptLogo,
  },
  {
    id: '4',
    title: 'Front End Developer @ DreamBox Learning',
    dates: '2020 - 2022',
    where: 'Remote',
    page: 'https://www.dreambox.com',
    description: 'Developing of multiple report pages mainly consisting of tables and graphs.',
    skills: ['Angular', 'RxJS', 'Storybook', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: dreamboxLogo,
  },
  {
    id: '5',
    title: 'Full Stack Developer @ Financiera Independencia',
    dates: '2021 - 2022',
    where: 'Remote',
    page: 'https://www.independencia.com.mx',
    description: 'Developing web and mobile applications using React and Java.',
    skills: ['React', 'Java', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: findepLogo,
  },
  {
    id: '6',
    title: 'Front End Developer @ RepVue',
    dates: '2022 - 2023',
    where: 'Remote',
    page: 'https://www.repvue.com',
    description:
      'Developing Server Side Rendered Progressive Web Applications built with React, Next.js and browser APIs with a main focus on reports and graphs.',
    skills: ['React', 'Next.js', 'Typescript', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: repvueLogo,
  },
  {
    id: '7',
    title: 'Front End Developer @ Deckers',
    dates: '2023 - 2023',
    where: 'Remote',
    page: 'https://www.deckers.com',
    description:
      'Developing Server Side Rendered Progressive Web Applications built with React, Next.js and browser APIs.',
    skills: ['React', 'Next.js', 'Typescript', 'HTML5', 'SASS', 'Git', 'SCRUM'],
    logo: deckersLogo,
  },
];

const Experience = () => {
  const reversedArray = [...experienceArray].reverse();
  return (
    <div>
      <h1>Experience</h1>
      <CoolAccordion array={reversedArray} />
    </div>
  );
};

export default Experience;
