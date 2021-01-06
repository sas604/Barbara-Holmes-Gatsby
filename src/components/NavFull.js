import { Link } from 'gatsby';
import React from 'react';

import { NavStyles } from '../styles/NavStyles';

export default function NavFull() {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: 'active' } : { className: 'notActive' };

  return (
    <NavStyles>
      <ul layout>
        <li>
          <Link getProps={isActive} to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link getProps={isActive} to="/portfolio">
            Portfolio
          </Link>{' '}
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>{' '}
        </li>
        <li>
          <Link to="/resume">Resume</Link>{' '}
        </li>
      </ul>
    </NavStyles>
  );
}
