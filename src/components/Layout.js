import React from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600-italic.css';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <div>{children}</div>
    </>
  );
}
