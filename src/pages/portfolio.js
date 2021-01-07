import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ProjectGridStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  padding: 1.5rem;
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
`;

export default function Portfolio({ data }) {
  console.log(data);
  const pages = Math.ceil(data.posts.totalCount / 6);
  console.log(pages);
  return (
    <Layout>
      <h1> Portfolio</h1>
      <section>
        <ProjectGridStyles>
          {data.posts.nodes.map((post) => (
            <li key={post.id}>
              <Link to={`/${post.slug}`}>
                <Img
                  fluid={
                    post.featuredImage.node.localFile.childImageSharp.fluid
                  }
                />
                <h3>{post.title.toLowerCase()}</h3>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </Link>
            </li>
          ))}
        </ProjectGridStyles>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query getAllposts {
    posts: allWpPost {
      totalCount
      nodes {
        categories {
          nodes {
            name
          }
        }
        id
        excerpt
        date
        slug
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
  }
`;
