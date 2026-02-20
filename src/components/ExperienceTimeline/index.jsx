import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const ExperienceTimeline = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="timeline">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`timeline__item${isOpen ? ' timeline__item--open' : ''}`}
          >
            <button
              className="timeline__header"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`timeline-body-${item.id}`}
              id={`timeline-header-${item.id}`}
            >
              <div className="timeline__header-left">
                <span className="timeline__role">{item.title}</span>
                <span className="timeline__company">@ {item.place}</span>
              </div>
              <div className="timeline__header-right">
                <span className="timeline__dates">{item.dates}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="timeline__chevron"
                  aria-hidden="true"
                />
              </div>
            </button>

            <div
              id={`timeline-body-${item.id}`}
              role="region"
              aria-labelledby={`timeline-header-${item.id}`}
              className="timeline__body"
              hidden={!isOpen}
            >
              <div className="timeline__meta">
                <span className="timeline__meta-item">
                  <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                  {item.where}
                </span>
                <span className="timeline__meta-item">
                  <FontAwesomeIcon icon={faCalendar} aria-hidden="true" />
                  {item.dates}
                </span>
                <a
                  href={item.page}
                  target="_blank"
                  rel="noreferrer"
                  className="timeline__meta-item timeline__meta-item--link"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  {item.page.replace('https://www.', '')}
                </a>
              </div>

              <div className="timeline__content">
                <p className="timeline__description">{item.description}</p>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.place} logo`}
                    className="timeline__logo"
                  />
                )}
              </div>

              <ul className="timeline__skills" aria-label="Technologies used">
                {item.skills.map((skill) => (
                  <li key={skill} className="timeline__pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
