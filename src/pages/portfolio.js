import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from '../styles/PortfolioStyles';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export default function Portfolio({ data, pageContext, location }) {
  // page size
<<<<<<< HEAD
  const [currentPage, setCurrentPage] = useState(
    location?.state.currentPage || 0
  );
=======
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => setCurrentPage(location.state.currentPage || 0), [
    location.state.currentPage,
  ]);
>>>>>>> 298fd513cb5e7d0ab6cfc1b4bc252e4d1ca1c0cb
  const pageSize = 6;
  const posts = data.posts.posts.nodes;
  const getPostsPerPageSize = (current, size, arr) => {
    const start = current * size;
    const finish = start + size;
    return arr.slice(start, finish);
  };
  console.log(location);
  return (
    <Layout navColor="var(--blue)">
      <styles.HeroSectionStyles>
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
          <h1>
            Portfolio
            {pageContext.category && (
              <span className="category">&mdash;{pageContext.category}</span>
            )}
          </h1>
          <styles.PortfolioNav>
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
          </styles.PortfolioNav>
        </header>
      </styles.HeroSectionStyles>
      <styles.ProjectGridStyles>
        <Pagination
          pageSize={6}
          length={posts.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ul>
          <AnimatePresence>
            {getPostsPerPageSize(currentPage, pageSize, posts).map((post) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={post.id}
              >
                <Link to={`/portfolio/${post.slug}`} state={{ currentPage }}>
                  <Img
                    fluid={
                      post.featuredImage.node.localFile.childImageSharp.fluid
                    }
                  />
                  <h3>{post.title.toLowerCase()}</h3>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </styles.ProjectGridStyles>
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
