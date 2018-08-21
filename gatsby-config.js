require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Advanced Jamstack Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.graphcms_endpoint,
        token: process.env.graphcms_token,
        query: `{
          cards(
            where: {
              status: PUBLISHED
            }
            orderBy: order_ASC) {
            id
            title
            imgSrc
            markdown
          }
        }`,
      },
    },
  ],
};
