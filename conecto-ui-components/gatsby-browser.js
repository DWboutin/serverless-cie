import React from 'react'
import { WithIntl } from './src/i18n'

require('./src/_components/_base/styles.scss');
require('./src/_components/_base/roofing.scss');

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <WithIntl {...props}>{element}</WithIntl>
}