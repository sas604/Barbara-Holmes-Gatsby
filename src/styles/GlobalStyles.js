import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
    --white:hsl(40, 1%, 98%);
    --gold: hsl(35, 78%, 30%);
    --blue: hsl(207,19%,35%);
    --gray: hsl(207, 17%, 25%);
    --black:hsl(207,18%,15%);
    --gold-bright:hsl(40, 85%, 50%); 
    --medium: 960px;
    --small: 568px;

}
.fixed{
  
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding-right:12px;

}
  html {
    font-size: 16px;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body{
  background-color:var(--white);
  font-family: 'raleway',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color:var(--black);
  line-height:1.4;
}

h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
img {
    max-width: 100%;
  }
  p{
    line-height: 1.4;
  }
:any-link{

  color:var(--gold);
  font-weight:600;
  font-style:italic;
  font-size: 1.1rem;
  text-decoration:none;
  &:hover, &:focus{
    color: var(--gold-bright);
    border-bottom: 2px solid var(--gold-bright);
  }

}`;

export default GlobalStyles;
