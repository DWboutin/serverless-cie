/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const baseLanguage = require('./gatsby-config').siteMetadata.baseLanguage

const { languages, messages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    languages.forEach(({ value }) => {
      /**
       * Example for client-side only pages
       * It will keep the last part of the URL when you change language
       */
      if (page.path.match(/^\/client-side-page/)) {
        page.matchPath = (value !== baseLanguage) ? `/${value}/client-side-page/*` : '/client-side-page/*';
      }

      const pageLocalePath = (value !== baseLanguage) ? `/${value}${page.path}` : page.path
      const localePage = {
        ...page,
        originalPath: page.path,
        path: pageLocalePath,
        context: {
          locale: value,
          originalPath: page.path,
        },
      }

      createPage(localePage)
    })

    resolve()
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.js', '.json'],
    },
  })
}