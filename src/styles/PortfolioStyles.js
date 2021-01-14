import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  height: 75vh;
  background: linear-gradient(180deg, var(--white) 55%, hsl(0 0% 82%) 100%);
  header {
    margin-top: -5rem;
    padding: 0 1.5rem;
    z-index: 3;
    position: relative;
  }
  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.3rem);
    line-height: 1;
    min-height: 5rem;
    text-transform: uppercase;
    color: var(--blue);
  }
  .category {
    text-transform: capitalize;
    font-weight: 400;
    display: block;
  }
  .gatsby-image-wrapper:first-of-type {
    transform: scaleX(-1);
    height: 75vh;
    max-width: 450px;
    mix-blend-mode: darken;
  }
  .only-large {
    display: none;
  }
  @media (min-width: 960px) {
    .category {
      display: inline;
    }
    background: unset;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(12, minmax(50px, 1fr));
    gap: 1rem 20px;
    grid-template-rows: 1fr 1fr;
    padding: 2rem 1.5rem 5rem;
    header {
      grid-column: 1/-1;
      margin: 0;
      grid-row: 2;
      align-self: flex-end;
      padding: 0;
    }
    h1 {
      min-height: 0;
      font-size: 2.4rem;
    }
    ul {
      margin-bottom: 0;
    }
    .gatsby-image-wrapper:first-of-type {
      transform: scaleX(-1);
      height: unset;
      max-width: unset;
      grid-row: 2;
      grid-column: 7/9;
      align-self: flex-end;
    }
    .gatsby-image-wrapper {
      img {
        object-fit: contain;
      }
    }
    .only-large {
      display: block;
    }
    .tacoma {
      grid-column: 5/8;
      grid-row: 1/3;
      align-self: flex-start;
      min-height: 40vh;
    }
    .chopstick {
      grid-column: 8/12;
      grid-row: 1;
    }
    .untitled {
      grid-column: 9/13;
      grid-row: 2;
    }
  }
`;
export const ProjectGridStyles = styled.section`
  padding: 3rem 1.5rem;
  min-height: 100vh;
  ul {
    display: grid;
    justify-content: center;
    --repeat: auto-fit;
    grid-template-columns: repeat(var(--repeat), minmax(250px, 375px));
    padding: 0;
    gap: 1rem;
    .gatsby-image-wrapper {
      height: 200px;
    }
    a > :not(:first-child) {
      padding: 0 1rem;
    }

    li {
      box-shadow: 0px 6px 12px 3px rgba(0, 0, 0, 0.13);
      list-style: none;

      h3 {
        margin-top: 1.2rem;
        font-size: 1.4rem;
        color: var(--blue);
        text-transform: capitalize;
        font-weight: 600;
      }
      a:any-link {
        font-style: normal;
        color: var(--black);
        background-color: red;
        font-weight: 400;
      }
    }
    @media (min-width: calc(250px * 3)) {
      --repeat: 3;
    }
    .category {
      display: inline;
    }
  }
`;
export const PortfolioNav = styled.nav`
  nav {
    padding-top: 4rem;
  }
  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
  }
  li:not(:first-of-type) {
    margin-left: 0.5rem;
  }
  a {
    padding: 0.3rem 0.5rem;
    text-transform: capitalize;
  }
  .active {
    background-color: var(--blue);
    color: var(--gold-bright);
  }
`;
