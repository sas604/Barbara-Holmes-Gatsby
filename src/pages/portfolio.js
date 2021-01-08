import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ProjectGridStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 350px));
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
  console.log(data.posts.count);
  return (
    <Layout>
      <h1> Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">All</Link>
          </li>
          {data.childCat.wpChildren.nodes.map((category) => (
            <li>
              <Link to={`/portfolio/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>
        <ProjectGridStyles>
          {data.posts.posts.nodes.map((post) => (
            <li key={post.id}>
              <Link to={`${post.slug}`}>
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
  query getAllposts($category: String = "portfolio") {
    posts: wpCategory(name: { eq: $category }) {
      count
      posts {
        nodes {
          date
          excerpt
          slug
          id
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
          title
        }
      }
    }
    childCat: wpCategory(name: { eq: "portfolio" }) {
      wpChildren {
        nodes {
          name
        }
      }
    }
  }
`;
