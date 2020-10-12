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
      // src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAPS_KEY}&q=Space+Needle,Seattle+WA`} allowFullScreen>
      },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bangers`,
          `Special Elite` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`
  ],
  
}

