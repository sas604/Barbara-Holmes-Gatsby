import { graphql } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexPageStyles = styled.div`
  header {
    min-height: 100vh;
  }
`;

const IndexPage = () => (
  <Layout>
    <IndexPageStyles>
      <header>
        <h1>Barbara Holmes</h1>
        <span className="tag-line">Artist | Designer | Educator</span>
      </header>
    </IndexPageStyles>
  </Layout>
);

export default IndexPage;
