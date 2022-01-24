import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: props.closed ? null : 0,
    }

    this.classesPrefix = 'to-accordion'
    this.handlePanelClick = this.handlePanelClick.bind(this)
  }

  handlePanelClick(index) {
    let newIndexValue = index

    if (index === this.state.selectedIndex) {
      newIndexValue = null
    }

    this.setState({
      selectedIndex: newIndexValue,
    })
  }

  render() {
    const { className, children } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, ['className'])

    return (
      <div className={classes} {...componentProps}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === this.state.selectedIndex,
            onClick: () => this.handlePanelClick(index),
          })
        )}
      </div>
    )
  }
}

Accordion.defaultProps = {
  closed: false,
}

Accordion.propTypes = {
  className: PropTypes.string,
  closed: PropTypes.bool,
}

export default Accordion
