import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from '../styles/PortfolioStyles';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';
import PageNamberContext from '../components/PageNumberContext';

export default function Portfolio({ data, pageContext }) {
  // page size
  const { pageSize, currentPage, setCurrentPage } = useContext(
    PageNamberContext
  );
  const posts = data.posts.posts.nodes;
  const getPostsPerPageSize = (current, size, arr) => {
    const start = current * size;
    const finish = start + size;
    return arr.slice(start, finish);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <SEO
        title={`Portfolio-${pageContext.category ? pageContext.category : ''}`}
      />
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
          pageSize={pageSize}
          length={posts.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <AnimatePresence>
          <motion.ul>
            {getPostsPerPageSize(currentPage, pageSize, posts).map(
              (post, i) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 * i }}
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
              )
            )}
          </motion.ul>
        </AnimatePresence>
      </styles.ProjectGridStyles>
    </motion.div>
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
