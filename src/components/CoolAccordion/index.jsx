import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faArrowUpRightFromSquare,
  faChevronDown,
  faBuilding,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const CoolAccordion = ({ array }) => {
  return (
    <div className="accordionWrapper">
      {array.map((element, index) => {
        return (
          <Accordion defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls={`panel${element.id}-content`}
              id={`panel${element.id}-header`}
            >
              <span>
                {element.title} <span className="place">@ {element.place}</span>
              </span>
              <span className="topDates">{element.dates}</span>
            </AccordionSummary>
            <AccordionDetails>
              <div className="data">
                <div className="where">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {element.where}
                </div>
                <div className="page">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <a href={element.page} target="_blank">
                    {element.page.split('//www.')[1]}
                  </a>
                </div>
              </div>
              <div className="data">
                <div className="where">
                  <FontAwesomeIcon icon={faBuilding} />
                  {element.place}
                </div>
                <div className="page">
                  <FontAwesomeIcon icon={faCalendar} />
                  {element.dates}
                </div>
              </div>
              <img src={element.logo} alt="Logo" className="logo" />
              <div className="description">{element.description}</div>
              <div className="skills">
                {element.skills.map((skill) => (
                  <div className="pill">{skill}</div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CoolAccordion;
