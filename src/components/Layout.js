import React from 'react';
import 'fontsource-raleway';
import 'fontsource-raleway/300.css'; // Weight 300.
import 'fontsource-raleway/600-italic.css';
import styled from 'styled-components';
import 'normalize.css';

const LayoutStyles = styled.div`
  color: white;
  font-family: raleway;
  background-color: red;
`;

export default function Layout({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}
