import PropTypes from 'prop-types'
import React from 'react'

import { SwitchLanguage, Link } from '../i18n'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">Conecto UI Kit React Components</Link>
      </h1>
      <SwitchLanguage />
    </div>
  </div>
)

export default Header
