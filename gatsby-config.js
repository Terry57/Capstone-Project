/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Capstone Project`,
    description: `Political buttons`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-179013038-1",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ax0qpos29tny`,
        accessToken: `yDAZEs23NSikt2Nl7zd8q2uciN8HDcvjg-DmxbuQxiI`,
      },
      },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`
  ],
  
}

