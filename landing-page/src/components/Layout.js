/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import LayoutHeader from './LayoutHeader'
import ViewportSection from './ViewportSection'

class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const SmoothScroll = require('smooth-scroll')

      new SmoothScroll('a[href*="#"]')
    }
  }

  render() {
    const { locale } = this.props

    return (
      <>
        <LayoutHeader />
        <main className="layout-wrapper">
          <ViewportSection locale={locale} />
          {this.props.children}
        </main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
