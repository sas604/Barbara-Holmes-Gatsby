import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const BurgerStyles = styled(motion.button)`
  display: none;
  @media (max-width: 960px) {
    appearance: none;
    border: 0;
    background-color: transparent;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: absolute;
    z-index: 5;
    top: 1rem;
    left: 0.5rem;
    &:focus {
      outline-color: var(--blue);
    }
    div + div {
      margin-top: 0.4rem;
    }
    div {
      /* pointer-events: none; */
      width: 1.5rem;
      height: 0.2rem;
      transform-origin: -1.6px;
      background-color: ${(props) => {
        if (!props.navOpen) {
          console.log(props.navOpen);
          return props.color;
        }
        return 'var(--white)';
      }};
    }
  }
`;
export default function NavSwitch({ onClick, navOpen, color = 'white' }) {
  return (
    <BurgerStyles
      title="menu toggle"
      color={color}
      navOpen={navOpen}
      animate={navOpen ? 'open' : 'close'}
      onClick={() => onClick()}
    >
      <motion.div
        variants={{
          open: { rotate: 45, x: 3.5 },
          close: { rotate: 0, x: 0 },
        }}
      />
      <motion.div
        variants={{
          open: { x: -3, opacity: 0 },
          close: { x: 0, opacity: 1 },
        }}
      />
      <motion.div
        variants={{
          open: { rotate: -45, x: 3.5 },
          close: { rotate: 0, x: 0 },
        }}
      />
    </BurgerStyles>
  );
}
