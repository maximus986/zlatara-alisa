require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Zlatara Alisa AN | Poravka i prodaja nakita i časovnika`,
    description: `Specijalizovana radnja za prodaju nakita od zlata i srebra, časovnika, kao i popravku časovnika i nakita.`,
    author: `Aleksandar Maksimovic`,
    keywords: `Zlatara, nakit, prstenje, burme, verenicko prstenje, mindjuse, privesci, narukvice, ogrlice, satovi, popravka satova, popravka nakita, popravka časovnika, servis`,
    siteUrl: `http://zlatara-alisa.rs/`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `http://zlatara-alisa.rs/`,
        sitemap: `http://zlatara-alisa.rs/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Početna`,
        useClassNames: true
      },
    }
  ]
}
