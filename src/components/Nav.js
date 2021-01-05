import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled(motion.nav)`
  position: fixed;
  display: block;
  width: 70%;
  height: 100vh;
  z-index: 4;
  transform: translateX(0);
  ul {
    list-style: none;
  }
  @media (max-width: 526px) {
    background-color: var(--blue);

    ul {
      margin-top: 30vh;
      margin-left: 2rem;
    }
    li + li {
      margin-top: 1rem;
    }

    a {
      font-size: 1.3rem;
      display: block;
      color: var(--gold);
      font-weight: 600;
      font-style: italic;
      text-decoration: none;
      &:hover,
      &:focus {
        color: hsl(35, 100%, 60%);
      }
    }
  }
`;
export default function Nav({ navOpen }) {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: 'active' } : { className: 'notActive' };

  return (
    <NavStyles
      animate={navOpen ? 'open' : 'closed'}
      variants={{ closed: { x: '-100%' }, open: { x: '-2rem' } }}
    >
      <motion.ul layout>
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
      </motion.ul>
    </NavStyles>
  );
}
