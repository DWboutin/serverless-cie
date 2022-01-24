import React from 'react'

import { WithStyle, WithRoofingStyle, googleScriptCallbackInit } from 'conecto-ui-components'

import { WithIntl } from './src/i18n'

import './src/_styles/styles.scss'

googleScriptCallbackInit()
WithStyle()
WithRoofingStyle()

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <WithIntl {...props}>{element}</WithIntl>
}