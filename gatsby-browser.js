import React from 'react';
import Layout from './src/components/Layout';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  if (
    /portfolio/g.test(props.location.pathname) ||
    props.location.pathname === '/resume/'
  ) {
    console.log(props.location.pathname);

    return (
      <Layout navColor="var(--blue)" {...props}>
        {element}
      </Layout>
    );
  }
  return <Layout {...props}>{element}</Layout>;
};
