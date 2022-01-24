/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const baseLanguage = require('./gatsby-config').siteMetadata.baseLanguage

const { languages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    languages.forEach(({ value }) => {

      if (page.path.match(/^\/lead/) && !page.path.match(/^\/leads/)) {
        page.matchPath = (value !== baseLanguage) ? `/${value}/lead/*` : '/lead/*';
      }
      if (page.path.match(/^\/opportunity/)) {
        page.matchPath = (value !== baseLanguage) ? `/${value}/opportunity/*` : '/opportunity/*';
      }

      let pageLocalePath = (value !== baseLanguage) ? `/${value}${page.path}` : page.path

      const localePage = {
        ...page,
        originalPath: page.path,
        path: pageLocalePath,
        context: {
          locale: value,
          baseLocale: baseLanguage,
          originalPath: page.path,
        },
      }

      createPage(localePage)
    })

    resolve()
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
  require('toml-require').install();
  const netlify = require('./netlify.toml');
  const envVars = {
    'process.env.isSSR': JSON.stringify(true),
  }

  let netlifyEnv = netlify.context.local_dev.environment

  if (typeof process.env.CONTEXT !== 'undefined') {
    netlifyEnv = netlify.context[process.env.CONTEXT].environment
  }

  for (let k in netlifyEnv) {
    envVars[`process.env.${k}`] = JSON.stringify(netlifyEnv[k])
  }

  if (typeof process.env.CONTEXT !== 'undefined') {
    if (process.env.CONTEXT === 'branch-deploy') {
      envVars[`process.env.SITE_URL`] = JSON.stringify(process.env.DEPLOY_URL)
    }

    if (process.env.CONTEXT === 'production') {
      envVars[`process.env.SITE_URL`] = JSON.stringify(process.env.SITE_URL)
    }

    envVars[`process.env.BASE_LANGUAGE`] = JSON.stringify(process.env.BASE_LANGUAGE)
    envVars[`process.env.SECOND_LANGUAGE`] = JSON.stringify(process.env.SECOND_LANGUAGE)
    envVars[`process.env.ROOFING_SITE_URL`] = JSON.stringify(process.env.ROOFING_SITE_URL)
    envVars[`process.env.SITE_LANG_URL`] = JSON.stringify(process.env.SITE_LANG_URL)
    envVars[`process.env.FIREBASE_SENDER_ID`] = JSON.stringify(process.env.FIREBASE_SENDER_ID)
  }

  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.toml$/,
          use: loaders.null(),
        },
      ],
    },
    plugins: [
      plugins.define(envVars),
    ],
  })
}