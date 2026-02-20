import React from 'react';
import './styles.scss';

const SkillCard = ({ skill }) => {
  return (
    <article
      className={`skill-card skill-card--${skill.proficiency}`}
      role="listitem"
      aria-label={skill.label}
    >
      <div className="skill-card__logo-wrap">
        <img
          src={skill.logo}
          alt={`${skill.label} logo`}
          className="skill-card__logo"
          width="48"
          height="48"
        />
      </div>
      <span className="skill-card__label">{skill.label}</span>
    </article>
  );
};

export default SkillCard;
