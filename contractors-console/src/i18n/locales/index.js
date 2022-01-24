const fr = require('./fr')
const en = require('./en')

module.exports = {
  languages: [
    { value: 'fr', text: 'Français' },
    { value: 'en', text: 'English' },
  ],
  baseMessages: fr,
  messages: {
    en,
    fr,
  },
}
