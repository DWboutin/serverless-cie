import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

class Col extends React.Component {
  colClasses(col, size) {
    const classes = {}

    classes[`col-${size}-${col.span}`] = col.span
    classes[`col-${size}-offset-${col.offset}`] = col.offset
    classes[`first-${size}`] = col.first
    classes[`last-${size}`] = col.last
    classes[`start-${size}`] = col.start
    classes[`center-${size}`] = col.center
    classes[`end-${size}`] = col.end
    classes[`top-${size}`] = col.top
    classes[`middle-${size}`] = col.middle
    classes[`bottom-${size}`] = col.bottom
    classes[`around-${size}`] = col.around
    classes[`between-${size}`] = col.between
    classes[`hidden-${size}`] = col.hidden

    return classes
  }

  buildClasses() {
    const {
      className,
      fullHeight,
      alignMiddle,
      reverse,
      xs,
      sm,
      md,
      lg,
      xl,
    } = this.props
    const xsProps = typeof xs === 'object' ? this.colClasses(xs, 'xs') : {}
    const smProps = typeof sm === 'object' ? this.colClasses(sm, 'sm') : {}
    const mdProps = typeof md === 'object' ? this.colClasses(md, 'md') : {}
    const lgProps = typeof lg === 'object' ? this.colClasses(lg, 'lg') : {}
    const xlProps = typeof xl === 'object' ? this.colClasses(xl, 'xl') : {}

    const classes = classNames({
      col: true,
      'col-xs': !xs,
      'full-height': fullHeight,
      'align-middle': alignMiddle,
      reverse: reverse,
      ...xsProps,
      ...smProps,
      ...mdProps,
      ...lgProps,
      ...xlProps,
      [`${className}`]: className,
    })

    return classes
  }

  render() {
    const { children } = this.props
    const classes = this.buildClasses()
    const componentProps = omit(this.props, [
      'children',
      'className',
      'fullHeight',
      'alignMiddle',
      'reverse',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ])

    return (
      <div className={classes} {...componentProps}>
        {children}
      </div>
    )
  }
}

const sizePropTypes = PropTypes.shape({
  span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  first: PropTypes.bool,
  last: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  end: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  around: PropTypes.bool,
  between: PropTypes.bool,
  hidden: PropTypes.bool,
})

Col.defaultProps = {
  fullHeight: false,
  alignMiddle: false,
  reverse: false,
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullHeight: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  reverse: PropTypes.bool,
  xs: sizePropTypes,
  sm: sizePropTypes,
  md: sizePropTypes,
  lg: sizePropTypes,
  xl: sizePropTypes,
}

export default Col
