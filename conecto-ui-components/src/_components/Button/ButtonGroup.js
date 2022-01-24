import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-btn-group'
  }

  render() {
    const { className } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`${className}`]: className,
    })

    return <div className={classes}>{this.props.children}</div>
  }
}

ButtonGroup.defaultProps = {}

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ButtonGroup
