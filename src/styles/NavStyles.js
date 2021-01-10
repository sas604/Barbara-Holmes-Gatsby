import styled from 'styled-components';

export const NavStyles = styled.nav`
  position: absolute;
  display: block;
  width: 70%;
  height: 100vh;
  z-index: 4;
  ul {
    list-style: none;
  }

  @media (min-width: 960px) {
    top: 20vh;
    width: auto;
    ul {
      padding-left: 1.5rem;
      max-width: 250px;
    }
  }

  li + li {
    margin-top: 1rem;
  }
  @media (max-width: 960px) {
    background-color: var(--blue);

    ul {
      margin-top: 30vh;
      margin-left: 2rem;
      padding-right: 2rem;
    }

    a {
      padding: 0.5rem 0.5rem 0.5rem 0rem;
    }
  }
`;
