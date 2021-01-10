import React, { useEffect, useState } from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600.css';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import NavSwitch from './NavSwitch';
import Footer from './Footer';
import NavFull from './NavFull';

const LayoutStyles = styled.div``;
export default function Layout({ children, navColor = 'var(--white)' }) {
  const [navOpen, setOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });
  return (
    <LayoutStyles>
      <GlobalStyles />
      <NavSwitch
        color={navColor}
        navOpen={navOpen}
        onClick={() => setOpenNav(!navOpen)}
      />
      {windowWidth > 960 ? (
        <NavFull />
      ) : (
        <Nav navOpen={navOpen} width={windowWidth} />
      )}
      <div>{children}</div>
      <Footer />
    </LayoutStyles>
  );
}
