import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'
import closest from '../_helpers/closest'
import closeDropdown from '../_helpers/closeDropdown'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-btn'

    this.state = {
      active: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    const { id } = this.props

    if (typeof window.TO_DROPDOWN_LISTENER === 'undefined') {
      window.TO_DROPDOWN_LISTENER = true
      window.TO_DROPDOWN_IDS = {
        [`to-dropdown-${id}`]: this.handleClickOutside,
      }

      document.addEventListener('click', closeDropdown, false)
    } else {
      window.TO_DROPDOWN_IDS[`to-dropdown-${id}`] = this.handleClickOutside
    }
  }

  componentWillUnmount() {
    const { id } = this.props

    delete window.TO_DROPDOWN_IDS[`to-dropdown-${id}`]

    if (Object.keys(window.TO_DROPDOWN_IDS).length === 0) {
      delete window.TO_DROPDOWN_LISTENER
      document.removeEventListener('click', closeDropdown, false)
    }
  }

  handleClickOutside(e) {
    if (
      this.state.active === true &&
      closest(e.target, '.to-btn-dropdown-wrapper') === null
    ) {
      this.setState({
        active: false,
      })
    }
  }

  handleClick(e) {
    const { handleClick } = this.props

    if (
      closest(e.target, 'div').className.indexOf('to-btn-dropdown-wrapper') !==
      -1
    ) {
      this.setState(
        {
          active: !this.state.active,
        },
        () => {
          if (handleClick) {
            handleClick(e)
          }
        }
      )
    } else {
      e.preventDefault()
    }
  }

  render() {
    const { className, htmlType, comp, links } = this.props
    const { active } = this.state
    const wrapperClasses = classNames({
      'to-btn-dropdown-wrapper': true,
      active: active,
    })
    const classes = classNames({
      [this.classesPrefix]: true,
      'to-btn-dropdown': true,
      active: active,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'comp',
      'handleClick',
      'htmlType',
      'active',
      'type',
      'links',
    ])

    return (
      <div className={wrapperClasses}>
        {React.createElement(comp, {
          ...componentProps,
          type: comp === 'button' ? htmlType : '',
          onClick: this.handleClick,
          className: classes,
        })}
        {links && links.length > 0 && (
          <div className="to-btn-dropdown-menu">
            <ul>
              {links.map((link, index) => (
                <li key={`btn-drop-${index}`}>{link}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

Button.defaultProps = {
  comp: 'button',
  htmlType: 'button',
  type: 'primary',
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  comp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.symbol,
  ]),
  active: PropTypes.bool,
  htmlType: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'bordered',
    'ghost',
    'underlined',
    'menu',
    'account',
    'switch',
    'filter',
    'roofing',
  ]),
  className: PropTypes.string,
  handleClick: PropTypes.func,
  links: PropTypes.array.isRequired,
}

export default Button
