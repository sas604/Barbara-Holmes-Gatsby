import path from 'path';

async function turnPortfolioPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve(`./src/templates/Post.js`);

  // query post in portfolio category and list of subcategories;
  const { data } = await graphql(`
    query {
      portfolio: wpCategory(name: { eq: "portfolio" }) {
        posts {
          nodes {
            slug
            categories {
              nodes {
                name
              }
            }
          }
        }
        wpChildren {
          nodes {
            slug
            posts {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  `);
  // create page for each post
  data.portfolio.posts.nodes.forEach((post) =>
    actions.createPage({
      path: `portfolio/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
        category: post.categories.nodes,
      },
    })
  );
  // create pages for each subcategory
  data.portfolio.wpChildren.nodes.forEach((category) =>
    actions.createPage({
      path: `portfolio/${category.slug}`,
      component: path.resolve('./src/pages/portfolio.js'),
      context: {
        category: category.slug,
      },
    })
  );

  // // mmake pagination fot each subcategory
  // Array.from({ length: pageCount }).forEach((_, i) =>
  //   actions.createPage({
  //     path: `portfolio/${i + 1}`,
  //     component: path.resolve('./src/pages/portfolio.js'),
  //     context: {
  //       skip: i * 6,
  //       currentPage: i + 1,
  //       pageSize: 6,
  //     },
  //   })
  // );
}
export async function createPages(params) {
  await turnPortfolioPostsIntoPages(params);
}
