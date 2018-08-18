module.exports = {
  siteMetadata: {
    title: 'Basic Jamstack Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
