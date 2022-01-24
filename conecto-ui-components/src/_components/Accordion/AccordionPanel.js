import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'
import Icon from '../Icon'

class AccordionPanel extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-accordion-panel'
  }

  render() {
    const { className, onClick, isActive, title, children } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      active: isActive,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'className',
      'onClick',
      'title',
      'isActive',
    ])

    return (
      <div className={classes}>
        <div className="to-accordion-panel-title" onClick={onClick}>
          <div className="text">{title}</div>
          <div className="arrow">
            <Icon type="arrow-down" />
          </div>
        </div>
        <div className="to-accordion-panel-content">
          <div className="content-wrap">{children}</div>
        </div>
      </div>
    )
  }
}

AccordionPanel.defaultProps = {
  isActive: false,
}

AccordionPanel.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.any.isRequired,
}

export default AccordionPanel
