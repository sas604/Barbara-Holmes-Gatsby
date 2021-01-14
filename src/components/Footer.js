import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  padding: 0.5rem 0;
  border-top: 1px solid var(--blue);
  span {
    margin: 0 0.5rem;
  }
`;

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <FooterStyles>
      <Link to="/contacts">Contacts</Link> <span>|</span>
      <Link to="/resume">Resume</Link>
      <h5>&copy; BARBARA HOLMES {date}</h5>
    </FooterStyles>
  );
}
