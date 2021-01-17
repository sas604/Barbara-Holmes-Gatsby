import { motion } from 'framer-motion';
import { graphql } from 'gatsby';

import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ResumeStyles = styled.div`
  max-width: 650px;
  margin: 3rem auto;
  padding: 3rem 1.5rem;
  background-color: #fff;
  box-shadow: 0px 6px 12px 3px rgba(0, 0, 0, 0.13);
  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.3rem);
    line-height: 1;
    text-transform: uppercase;
    color: var(--blue);
    line-height: 1.5;
  }
  .wp-block-file .wp-block-file__button {
    background-color: var(--gray);
    border-radius: 0;
  }
  p > a {
    display: block;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  @media (max-width: 960px) {
    margin: 0 auto 3rem;
  }
`;
export default function Resume({ data }) {
  return (
    <>
      <SEO title="Resume" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ResumeStyles>
          <h1>{data.wpPage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
        </ResumeStyles>
      </motion.div>
    </>
  );
}
export const query = graphql`
  query resume {
    wpPage(slug: { eq: "resume" }) {
      title
      content
    }
  }
`;
