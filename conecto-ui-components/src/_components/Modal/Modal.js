import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'
import Button from '../Button'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-modal'
  }

  renderModal() {
    const {
      className,
      position,
      isOpen,
      handleClose,
      children,
      withBackground,
    } = this.props

    const classes = classNames({
      [this.classesPrefix]: true,
      open: isOpen,
      [`${className}`]: className,
    })
    const cardClasses = classNames({
      'to-modal-card': true,
      withBackground: withBackground,
    })

    return (
      <div className={classes}>
        <div className="to-modal-overlay" onClick={handleClose} />
        <div className={cardClasses} style={position}>
          <Button
            type="menu"
            className="to-modal-card__close-btn"
            handleClick={handleClose}
          >
            <Icon type="menu" className="active" />
          </Button>
          <div className="to-modal-content">{children}</div>
        </div>
      </div>
    )
  }

  render() {
    const { isOpen } = this.props
    let comp = null

    if (isOpen && typeof document !== 'undefined') {
      comp = ReactDOM.createPortal(this.renderModal(), document.body)
    }

    return comp
  }
}

Modal.defaultProps = {
  withBackground: false,
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  withBackground: PropTypes.bool,
}

export default Modal
