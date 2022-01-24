import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-navigation'
  }

  render() {
    const { className, vertical } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      vertical: vertical,
      [`${className}`]: className,
    })

    return (
      <nav className={classes}>
        <ul>
          {React.Children.map(this.props.children, child => {
            return <li className={child.props.className}>{child}</li>
          })}
        </ul>
      </nav>
    )
  }
}

Navigation.defaultProps = {
  vertical: false,
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

export default Navigation
