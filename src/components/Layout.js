import React, { useEffect, useState, useRef } from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600.css';
import 'normalize.css';
import '@wordpress/block-library/build-style/style.css';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import NavSwitch from './NavSwitch';
import Footer from './Footer';
import NavFull from './NavFull';
import { PageNumberProvider } from './PageNumberContext';

export default function Layout({
  location,
  children,
  navColor = 'var(--white)',
}) {
  const [navOpen, setOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const resize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [navOpen]);
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  return (
    <>
      <GlobalStyles />
      <div>
        <NavSwitch
          color={navColor}
          navOpen={navOpen}
          onClick={() => setOpenNav(!navOpen)}
        />
        {windowWidth > 960 ? (
          <NavFull />
        ) : (
          <Nav navOpen={navOpen} setOpenNav={setOpenNav} width={windowWidth} />
        )}
      </div>
      <PageNumberProvider>
        <AnimatePresence> {children} </AnimatePresence>
      </PageNumberProvider>
      <Footer />
    </>
  );
}
