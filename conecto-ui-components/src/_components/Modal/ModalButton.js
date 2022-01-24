import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Modal from './Modal'

class ModalButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      position: {},
    }

    this.classesPrefix = 'to-modal-button'

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen(e) {
    const eventPosition = e.target.getBoundingClientRect()

    this.setState({
      open: true,
      position: {
        top: `${eventPosition.y}px`,
        left: `${eventPosition.x}px`,
      },
    })
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const { children, button, withBackground } = this.props
    const buttonClasses = classNames({
      [this.classesPrefix]: true,
      [`${button.props.className}`]: button.props.className,
    })

    return (
      <>
        {React.cloneElement(button, {
          handleClick: this.handleOpen,
          className: buttonClasses,
          active: this.state.open,
        })}
        <Modal
          isOpen={this.state.open}
          position={this.state.position}
          handleClose={this.handleClose}
          withBackground={withBackground}
        >
          {children}
        </Modal>
      </>
    )
  }
}

ModalButton.defaultProps = {
  withBackground: false,
}

ModalButton.propTypes = {
  button: PropTypes.element.isRequired,
  children: PropTypes.any.isRequired,
  withBackground: PropTypes.bool,
}

export default ModalButton
