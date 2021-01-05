import { graphql } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexPageStyles = styled.section`
  .hero {
    height: 75vh;
  }
  header {
    position: relative;
    z-index: 3;
    margin-top: -6rem;
    padding: 0 1.5rem;
    text-transform: uppercase;
    color: var(--white);
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.36);
  }
  h1 {
    font-weight: 300;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.3rem);
    line-height: 1;
  }
  .tag-line {
    font-size: clamp(14px, 4vw, 1rem);
  }
`;

const IndexPage = ({ data }) => {
  console.log(data.titleImage.fluid.src);
  return (
    <Layout>
      <IndexPageStyles>
        <Img
          className="hero"
          fluid={data.titleImage.fluid}
          alt="instalation No 5"
        />
        <header>
          <h1>Barbara Holmes</h1>
          <span className="tag-line">Artist | Designer | Educator</span>
        </header>
      </IndexPageStyles>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    titleImage: imageSharp(
      fluid: { originalName: { eq: "01-Untitled-No.-5-1.jpg" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    bodyImage: imageSharp(
      fluid: { originalName: { eq: "09-Untitled-No.-5-1.jpg" } }
    ) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default IndexPage;
