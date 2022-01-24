import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-grid'
  }

  render() {
    const { children, className, fluid, fullHeight } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      container: !fluid,
      'container-fluid': fluid,
      'container-full-height': fullHeight,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'children',
      'className',
      'fluid',
      'fullHeight',
    ])

    return (
      <div className={classes} {...componentProps}>
        {children}
      </div>
    )
  }
}

Grid.defaultProps = {
  fluid: false,
  fullHeight: false,
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  fullHeight: PropTypes.bool,
}

export default Grid
