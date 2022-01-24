import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

class NavigationLink extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-navigation-link'
  }

  render() {
    const { className, comp, hasNotifications, isActive } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      active: isActive,
      hasNotifications: hasNotifications,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'className',
      'comp',
      'hasNotifications',
      'isActive',
    ])

    return React.createElement(comp, {
      className: classes,
      ...componentProps,
      children: React.Children.map(this.props.children, child => {
        return <span className="text-content">{child}</span>
      }),
    })
  }
}

NavigationLink.defaultProps = {
  hasNotifications: false,
  isActive: false,
  comp: 'a',
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasNotifications: PropTypes.bool,
  isActive: PropTypes.bool,
}

export default NavigationLink
