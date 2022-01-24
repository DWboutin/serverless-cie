const frLocaleData = require('react-intl/locale-data/fr')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(frLocaleData)

const messages = defineMessages({
  lang_fr: 'Français',
  lang_en: 'English',
  string1: 'Français',
  contractor: 'Entrepreneur',
  roofing: 'Toitures',
})

module.exports = messages
