import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Grid, { Row, Col } from '../Grid'
import Navigation from '../Navigation'

class SiteHeader extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-site-header'
  }

  render() {
    const { className, logo, buttons, fluid, vertical } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`${className}`]: className,
    })

    return (
      <div className={classes}>
        <Grid fullHeight fluid={fluid}>
          <Row xs={{ alignement: 'middle' }}>
            <Col className="logo-content">{logo}</Col>
            <Col fullHeight className="nav-content">
              <Navigation vertical={vertical}>{this.props.children}</Navigation>
            </Col>
            <Col fullHeight alignMiddle className="buttons-content">
              {buttons}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

SiteHeader.defaultProps = {
  type: 'conecto',
  fluid: false,
  vertical: false,
}

SiteHeader.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  vertical: PropTypes.bool,
  logo: PropTypes.node.isRequired,
  className: PropTypes.string,
  buttons: PropTypes.node,
}

export default SiteHeader
