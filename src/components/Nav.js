import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';

import { NavStyles } from '../styles/NavStyles';

export default function Nav({ navOpen }) {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: 'active' } : { className: 'notActive' };

  return (
    <NavStyles
      as={motion.nav}
      initial={{ x: '-100%' }}
      animate={navOpen ? 'open' : 'closed'}
      variants={{ closed: { x: '-100%' }, open: { x: '-2rem' } }}
    >
      <motion.ul layout>
        <li>
          <Link getProps={isActive} to="/">
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
      </motion.ul>
    </NavStyles>
  );
}
