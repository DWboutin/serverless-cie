import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

const Layout = ({ children, handleLanguageChange }) => (
  <div>
    <Header handleLanguageChange={handleLanguageChange} />
    <div>{children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
