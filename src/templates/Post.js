import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const HeroSectionStyles = styled.div`
  height: 75vh;
  padding: 5rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--blue);
  }
  .gatsby-image-wrapper {
    margin-top: 1rem;
    height: calc(75vh - 2rem);
  }
  @media (min-width: 960px) {
    min-height: 100vh;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(12, minmax(50px, 1fr));

    h1 {
      grid-column: 1/5;
      align-self: flex-end;
      grid-row: 1;
      font-size: 2.4rem;
    }
    .gatsby-image-wrapper {
      margin-top: 0;
      height: unset;
      grid-column: 5/-1;
      grid-row: 1;
    }
  }
`;
const WpPostStyle = styled.section`
  padding: 3rem 1.5rem;
  h2 {
    font-weight: 600;
    padding-bottom: 2rem;
    max-width: 50ch;
    text-align: center;
    margin: 0 auto;
    @media (min-width: 960px) {
      font-size: 1.8rem;
    }
  }
  .wp-block-columns {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 6px 12px 3px rgba(0, 0, 0, 0.13);
  }
  ul.blocks-gallery-grid {
    display: grid;
    --repeat: auto-fit;
    grid-template-columns: repeat(var(--repeat), minmax(250px, 375px));
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .inline-gatsby-image-wrapper {
    height: 100%;
  }
  .wp-block-gallery.columns-3 li.blocks-gallery-item {
    width: 100%;
    margin: 0;
  }
`;
const BackBtn = styled.button`
  background: none;
  color: var(--gold);
  border: none;
  display: block;
  margin: 1rem auto;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    color: var(--gold-bright);
    border-bottom: 1px solid;
  }
`;
export default function Post({ data }) {
  return (
    <Layout navColor="var(--blue)">
      <HeroSectionStyles>
        <h1> {data.wpPost.title}</h1>
        <Img
          fluid={data.wpPost.featuredImage.node.localFile.childImageSharp.fluid}
        />
      </HeroSectionStyles>
      <WpPostStyle
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
      />
      <BackBtn type="button" onClick={() => navigate(-1)}>
        &#8592; Back
      </BackBtn>
    </Layout>
  );
}

export const query = graphql`
  query getPost($slug: String) {
    wpPost(slug: { eq: $slug }) {
      content
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
