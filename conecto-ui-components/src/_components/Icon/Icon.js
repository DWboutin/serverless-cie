import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import To from '../Logo/Logos/To'
import Menu from './Icons/Menu'
import Alert from './Icons/Alert'
import ArrowDown from './Icons/ArrowDown'
import Bookmark from './Icons/Bookmark'
import Check from './Icons/Check'
import Close from './Icons/Close'
import Cog from './Icons/Cog'
import Concurrents from './Icons/Concurrents'
import Email from './Icons/Email'
import Facebook from './Icons/Facebook'
import Flag from './Icons/Flag'
import ColoredFlag from './Icons/ColoredFlag'
import Marker from './Icons/Marker'
import Notification from './Icons/Notification'
import Phone from './Icons/Phone'
import Search from './Icons/Search'
import SMS from './Icons/SMS'
import ThumbUp from './Icons/ThumbUp'
import User from './Icons/User'

import CCAmex from './Icons/CCAmex'
import CCDefault from './Icons/CCDefault'
import CCDinersClub from './Icons/CCDinersClub'
import CCDiscover from './Icons/CCDiscover'
import CCJCB from './Icons/CCJCB'
import CCMastercard from './Icons/CCMastercard'
import CCVisa from './Icons/CCVisa'

class Icon extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-icon'
  }

  iconDefinition(type) {
    switch (type) {
      case 'alert':
        return Alert
      case 'arrow-down':
        return ArrowDown
      case 'bookmark':
        return Bookmark
      case 'check':
        return Check
      case 'close':
        return Close
      case 'cog':
        return Cog
      case 'concurrents':
        return Concurrents
      case 'email':
        return Email
      case 'facebook':
        return Facebook
      case 'flag':
        return Flag
      case 'colored-flag':
        return ColoredFlag
      case 'marker':
        return Marker
      case 'menu':
        return Menu
      case 'notification':
        return Notification
      case 'phone':
        return Phone
      case 'search':
        return Search
      case 'sms':
        return SMS
      case 'thumb-up':
        return ThumbUp
      case 'user':
        return User
      case 'cc-amex':
        return CCAmex
      case 'cc-default':
        return CCDefault
      case 'cc-dinersclub':
        return CCDinersClub
      case 'cc-discover':
        return CCDiscover
      case 'cc-jcb':
        return CCJCB
      case 'cc-mastercard':
        return CCMastercard
      case 'cc-visa':
        return CCVisa
      case 'conecto':
      default:
        return To
    }
  }

  render() {
    const { className, type } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`${className}`]: className,
    })
    const iconToRender = this.iconDefinition(type)

    return (
      <i className={classes} aria-label={`icon: ${type}`}>
        {React.createElement(iconToRender)}
      </i>
    )
  }
}

Icon.defaultProps = {
  type: 'conecto',
}

const IconTypePropTypes = PropTypes.oneOf([
  'alert',
  'arrow-down',
  'bookmark',
  'check',
  'close',
  'cog',
  'concurrents',
  'email',
  'facebook',
  'flag',
  'colored-flag',
  'marker',
  'menu',
  'notification',
  'phone',
  'search',
  'sms',
  'thumb-up',
  'user',
  'cc-amex',
  'cc-default',
  'cc-dinersclub',
  'cc-discover',
  'cc-jcb',
  'cc-mastercard',
  'cc-visa',
  'conecto',
])

Icon.propTypes = {
  type: IconTypePropTypes,
  className: PropTypes.string,
}

export { Icon as default, IconTypePropTypes }
