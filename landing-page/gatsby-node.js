const configBaseLanguage = require('./gatsby-config').siteMetadata.baseLanguage

const { languages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  const baseLanguage = (process.env.BASE_LANGUAGE) ? process.env.BASE_LANGUAGE : configBaseLanguage

  return new Promise(resolve => {
    languages.forEach(({ value }) => {
      const pageLocalePath = (value !== baseLanguage) ? `/${value}${page.path}` : page.path
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

    envVars[`process.env.SITE_LANG_URL`] = JSON.stringify(process.env.SITE_LANG_URL)
    envVars[`process.env.BASE_LANGUAGE`] = JSON.stringify(process.env.BASE_LANGUAGE)
    envVars[`process.env.SECOND_LANGUAGE`] = JSON.stringify(process.env.SECOND_LANGUAGE)
    envVars[`process.env.BASE_SITE_TITLE`] = JSON.stringify(process.env.BASE_SITE_TITLE)
    envVars[`process.env.CONTRACTOR_URL`] = JSON.stringify(process.env.CONTRACTOR_URL)
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