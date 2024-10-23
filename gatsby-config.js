/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bonaparte | Your Digital Strategist`,
    description: `Meet BONAPARTE—Your Digital Strategist. We're not just a digital marketing agency; we're your strategic partners in world-class branding and digital domination. Forget buzzwords and fluff. We deliver hard-hitting results that last.`,
    siteUrl: `https://bonapartedigital.com/`,
    image: "/images/Preview_Image@2x.png",
    twitterUsername: `@bonapartedigital`,
  },
  plugins: ["gatsby-plugin-postcss",
  "gatsby-plugin-image",
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  "gatsby-transformer-remark",
  {
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  },
},
  "gatsby-plugin-mdx",  
  "gatsby-plugin-sitemap",
  'gatsby-plugin-robots-txt',
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-W2RR2D4M",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Defaults to false
      enableWebVitalsTracking: true,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Bonaparte`,
      short_name: `Bonaparte`,
      start_url: `/`,
      background_color: `#ffffff`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/logo_small.svg`, // This path is relative to the root of the site.
    },
  },
   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp",
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'pages',
      'path': './src/pages/'
    },
    __key: "pages"
  }]
};