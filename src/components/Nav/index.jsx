import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGear, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to={`/`}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </li>
      <li>
        <Link to={`/about`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </li>
      <li>
        <Link to={`/skills`}>
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </li>
      <li>
        <Link to={`/experience`}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </li>
      <li>
        <Link to={`/contact`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
