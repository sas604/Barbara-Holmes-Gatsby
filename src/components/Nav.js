import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { NavStyles } from '../styles/NavStyles';

const MobileNavStyles = styled(NavStyles)`
  a {
    color: var(--gold-bright);
  }
`;
export default function Nav({ navOpen, setOpenNav }) {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: 'active' } : { className: 'notActive' };

  return (
    <MobileNavStyles
      as={motion.nav}
      initial={{ x: '-100%' }}
      animate={navOpen ? 'open' : 'closed'}
      variants={{ closed: { x: '-100%' }, open: { x: '-2rem' } }}
    >
      <motion.ul layout>
        <li>
          <Link getProps={isActive} to="/" onClick={() => setOpenNav(false)}>
            About
          </Link>
        </li>
        <li>
          <Link
            getProps={isActive}
            to="/portfolio/"
            onClick={() => setOpenNav(false)}
          >
            Portfolio
          </Link>{' '}
        </li>
        <li>
          <Link to="/contacts/" onClick={() => setOpenNav(false)}>
            Contacts
          </Link>{' '}
        </li>
        <li>
          <Link to="/resume/" onClick={() => setOpenNav(false)}>
            Resume
          </Link>{' '}
        </li>
      </motion.ul>
    </MobileNavStyles>
  );
}
