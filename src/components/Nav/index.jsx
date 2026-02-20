import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGear, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const navItems = [
  { to: '/',           icon: faHome,     label: 'Home' },
  { to: '/about',      icon: faUser,     label: 'About' },
  { to: '/skills',     icon: faGear,     label: 'Skills' },
  { to: '/experience', icon: faList,     label: 'Experience' },
  { to: '/contact',    icon: faEnvelope, label: 'Contact' },
];

const Nav = () => {
  return (
    <nav aria-label="Site navigation">
      <ul className="nav">
        {navItems.map(({ to, icon, label }) => (
          <li key={to} className="nav__item">
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} className="nav__icon" aria-hidden="true" />
              <span className="nav__tooltip" aria-hidden="true">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
