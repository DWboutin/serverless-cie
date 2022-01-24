const enLocaleData = require('react-intl/locale-data/en')
const intl = require('react-intl')
const defineMessages = intl.defineMessages
const addLocaleData = intl.addLocaleData

addLocaleData(enLocaleData)

const messages = defineMessages({
  lang_fr: 'Français',
  lang_en: 'English',
  string1: 'English',
  contractor: 'Contractor',
  roofing: 'Roofing',
})

module.exports = messages
