import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    list-style: none;
  }
`;
export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>{' '}
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
