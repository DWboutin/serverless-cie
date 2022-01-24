if (typeof process.env.REPOSITORY_URL !== 'undefined') {
  const mendatoryEnvVars = [
    'SITE_URL',
    'ROOFING_SITE_URL',
    'BASE_LANGUAGE',
    'BASE_SITE_TITLE',
  ]
  const missingEnvVars = []

  mendatoryEnvVars.forEach(mendatoryEnvVar => {
    if (typeof process.env[mendatoryEnvVar] === 'undefined') {
      missingEnvVars.push(mendatoryEnvVar)
    }
  })

  if (missingEnvVars.length > 0) {
    console.log('MISSING ENV VARS', JSON.stringify(missingEnvVars))
    throw `Cannot build without these env variables ${missingEnvVars.join(', ')}`
  }
}

if (!process.env.isSSR) { // variable set in Webpack (gatsby-node.js) to build correctly
  require('toml-require').install();
  const netlify = require('./netlify.toml');
  let netlifyEnv = netlify.context.local_dev.environment

  if (typeof process.env.CONTEXT !== 'undefined') {
    netlifyEnv = netlify.context[process.env.CONTEXT].environment
  }

  for (let k in netlifyEnv) {
    process.env[k] = netlifyEnv[k]
  }

  if (typeof process.env.CONTEXT !== 'undefined' && process.env.CONTEXT !== 'branch-deploy' && process.env.CONTEXT !== 'production') {
    process.env.SITE_URL = process.env.DEPLOY_URL
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    baseLanguage: process.env.BASE_LANGUAGE,
    title: process.env.BASE_SITE_TITLE,
    description: `Conecto vous met en contact avec des clients dans votre région`,
    author: `@Conecto_ca`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{
          userAgent: '*',
          allow: (process.env.CONTEXT === 'production') ? '/' : '',
          disallow: (process.env.CONTEXT === 'production') ? '' : '*'
        }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: `/sitemap.xml`,
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.BASE_SITE_TITLE,
        short_name: `Conecto`,
        start_url: `/`,
        background_color: `#26b89f`,
        theme_color: `#26b89f`,
        display: `minimal-ui`,
        icon: `src/images/to-icon.png`, // This path is relative to the root of the site.
        gcm_sender_id: process.env.FIREBASE_FIXED_SENDER_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
