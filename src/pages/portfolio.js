import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const HeroSectionStyles = styled.div`
  height: 75vh;
  background: linear-gradient(180deg, var(--white) 55%, hsl(0 0% 82%) 100%);
  header {
    margin-top: -6rem;
    padding: 0 1.5rem;
    z-index: 3;
    position: relative;
  }
  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    font-size: clamp(1.5rem, 9vw, 2.3rem);
    line-height: 1;

    text-transform: uppercase;
    color: var(--blue);
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
    background: unset;
    display: grid;
    grid-template-columns: repeat(12, minmax(50px, 90px));
    padding: 2rem 1.5rem;
    gap: 1rem 20px;
    grid-template-rows: 1fr 1fr;
    padding: 2rem 1.5rem 0;
    min-height: calc(75vh - 24px - 2rem);
    header {
      grid-column: 1/-1;
      margin: 0;
      grid-row: 2;
      align-self: flex-end;
      padding: 0;
    }
    .gatsby-image-wrapper:first-of-type {
      transform: scaleX(-1);
      height: unset;
      max-width: unset;
      grid-row: 2;
      grid-column: 7/9;
      align-self: flex-end;
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
const ProjectGridStyles = styled.section`
  margin-top: 3rem;
  padding: 3rem 1.5rem;
  ul {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(275px, 350px));

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
  }
`;
const PortfolioNav = styled.nav`
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
  }
`;
export default function Portfolio({ data }) {
  return (
    <Layout navColor="var(--blue)">
      <HeroSectionStyles>
        <Img fluid={data.lamp.fluid} alt={data.lamp.fluid.originalName} />
        <Img
          className="only-large chopstick"
          fluid={data.chopsticks.fluid}
          alt={data.chopsticks.fluid.originalName}
        />
        <Img
          className="only-large tacoma"
          fluid={data.tacoma.fluid}
          alt={data.tacoma.fluid.originalName}
        />
        <Img
          className="only-large untitled"
          fluid={data.untitled.fluid}
          alt={data.untitled.fluid.originalName}
        />
        <header>
          <h1> Portfolio</h1>
          <PortfolioNav>
            <ul>
              <li>
                <Link activeClassName="active" to="/portfolio">
                  All
                </Link>
              </li>
              {data.childCat.wpChildren.nodes.map((category, i) => (
                <li key={i}>
                  <Link
                    activeClassName="active"
                    to={`/portfolio/${category.name}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </PortfolioNav>
        </header>
      </HeroSectionStyles>
      <ProjectGridStyles>
        <ul>
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
        </ul>
      </ProjectGridStyles>
    </Layout>
  );
}

export const query = graphql`
  query getAllposts($category: String = "portfolio") {
    tacoma: imageSharp(fluid: { originalName: { eq: "01-tacoma.jpg" } }) {
      fluid {
        originalName
        ...GatsbyImageSharpFluid
      }
    }
    chopsticks: imageSharp(
      fluid: { originalName: { eq: "chopstick-sculpture-2012-1.jpg" } }
    ) {
      fluid {
        originalName
        ...GatsbyImageSharpFluid
      }
    }

    lamp: imageSharp(fluid: { originalName: { eq: "Osseous-2009-1.jpg" } }) {
      fluid {
        originalName
        ...GatsbyImageSharpFluid
      }
    }
    untitled: imageSharp(
      fluid: { originalName: { eq: "untitled-III-red-brown-1.jpg" } }
    ) {
      fluid {
        originalName
        ...GatsbyImageSharpFluid
      }
    }
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
