import React, { useState } from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600-italic.css';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import NavSwitch from './NavSwitch';

const LayoutStyles = styled.div``;
export default function Layout({ children }) {
  const [navOpen, setOpenNav] = useState(false);
  return (
    <LayoutStyles>
      <GlobalStyles />
      <NavSwitch navOpen={navOpen} onClick={() => setOpenNav(!navOpen)} />
      <Nav navOpen={navOpen} />
      <div>{children}</div>
    </LayoutStyles>
  );
}
