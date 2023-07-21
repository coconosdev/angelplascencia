import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGear, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to={`/`} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/about`} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/skills`} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faGear} />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/experience`} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faList} />
        </NavLink>
      </li>
      <li>
        <NavLink to={`/contact`} className={({ isActive }) => (isActive ? 'active' : '')}>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
