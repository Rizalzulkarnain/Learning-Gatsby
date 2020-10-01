module.exports = {
  siteMetadata: {
    title: `Design+Code using GatsbyJS`,
    description: `Making landingpage and learning Design+Code using GatsbyJS.`,
    author: `@naenroo`,
    keywords: [
      "react",
      "course",
      "bootcamp",
      "online learning",
      "programming",
      "coding",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "ruyobnxhk7t8",
        accessToken: "EV0MrRdxXNRz2T5xsv_p36Pcd6cAVoIN1jPLYqrXzDM",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
