import React from 'react';
import { skillsData } from '../../data/skills';
import SkillCard from '../SkillCard';
import './styles.scss';

const SkillsGrid = () => {
  return (
    <div className="skills-grid" role="list" aria-label="Technical skills">
      {skillsData.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;
