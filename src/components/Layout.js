import React, { useEffect, useState, useRef } from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600.css';
import 'normalize.css';
import '@wordpress/block-library/build-style/style.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import NavSwitch from './NavSwitch';
import Footer from './Footer';
import NavFull from './NavFull';

export default function Layout({ children, navColor = 'var(--white)' }) {
  const [navOpen, setOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const node = useRef();
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
    <div>
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
      <div>{children}</div>
      <Footer />
    </div>
  );
}
