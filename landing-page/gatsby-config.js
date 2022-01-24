if (typeof process.env.REPOSITORY_URL !== 'undefined') {
  const mendatoryEnvVars = [
    'SITE_URL',
    'SITE_LANG_URL',
    'BASE_LANGUAGE',
    'SECOND_LANGUAGE',
    'BASE_SITE_TITLE',
    'CONTRACTOR_URL',
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
} else if (!process.env.isSSR) { // variable set in Webpack (gatsby-node.js) to build correctly
  require('toml-require').install();
  const netlify = require('./netlify.toml');
  let netlifyEnv = netlify.context.local_dev.environment

  if (typeof process.env.CONTEXT !== 'undefined') {
    netlifyEnv = netlify.context[process.env.CONTEXT].environment
  }

  for (let k in netlifyEnv) {
    process.env[k] = netlifyEnv[k]
  }

  if (typeof process.env.CONTEXT !== 'undefined') {
    if (process.env.CONTEXT === 'branch-deploy') {
      envVars[`process.env.SITE_URL`] = process.env.DEPLOY_URL
    }

    envVars[`process.env.SITE_LANG_URL`] = JSON.stringify(process.env.SITE_LANG_URL)
    envVars[`process.env.BASE_LANGUAGE`] = JSON.stringify(process.env.BASE_LANGUAGE)
    envVars[`process.env.SECOND_LANGUAGE`] = JSON.stringify(process.env.SECOND_LANGUAGE)
    envVars[`process.env.BASE_SITE_TITLE`] = JSON.stringify(process.env.BASE_SITE_TITLE)
    envVars[`process.env.CONTRACTOR_URL`] = JSON.stringify(process.env.CONTRACTOR_URL)
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    baseLanguage: process.env.BASE_LANGUAGE,
    title: process.env.BASE_SITE_TITLE,
    contractorUrl: process.env.CONTRACTOR_URL,
    description: `Obtiens jusqu'à 4 soummissions pour ton projet de toiture`,
    author: `@Conecto_ca`,
  },
  pathPrefix: `/img`,
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
        host: `${process.env.SITE_URL}/`,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
        policy: [{
          userAgent: '*',
          allow: (process.env.CONTEXT === 'production') ? '/' : '',
          disallow: (process.env.CONTEXT === 'production') ? [] : ['*']
        }]
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: `/sitemap.xml`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.BASE_SITE_TITLE,
        short_name: `Conecto`,
        start_url: `/`,
        background_color: `#FE5143`,
        theme_color: `#FE5143`,
        display: `minimal-ui`,
        icon: `src/images/to-icon-roofing.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
