import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `BARBARA HOLMES`,
    // siteUrl: 'https://tagunovdesign.com',
    description:
      'Barba Holmes portfolio websit. Website made to explore Gatsby and WordPress integration',
    twitter: '@alex_tagunov',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress-experimental',
      options: {
        url: ' https://tagunovdesign.com/bh/graphql',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
  ],
};
