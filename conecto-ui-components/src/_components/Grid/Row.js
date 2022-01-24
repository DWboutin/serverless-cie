import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

class Row extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'row'
  }

  rowClasses(row, size) {
    const classes = {}

    classes[`${row.alignement}-${size}`] = row.alignement
    classes[`${row.distribution}-${size}`] = row.distribution

    return classes
  }

  buildClasses() {
    const { className, xs, sm, md, lg, xl, reverse } = this.props
    const xsProps = typeof xs === 'object' ? this.rowClasses(xs, 'xs') : {}
    const smProps = typeof sm === 'object' ? this.rowClasses(sm, 'sm') : {}
    const mdProps = typeof md === 'object' ? this.rowClasses(md, 'md') : {}
    const lgProps = typeof lg === 'object' ? this.rowClasses(lg, 'lg') : {}
    const xlProps = typeof xl === 'object' ? this.rowClasses(xl, 'xl') : {}

    const classes = classNames({
      [this.classesPrefix]: true,
      [`${className}`]: className,
      reverse: reverse,
      ...xsProps,
      ...smProps,
      ...mdProps,
      ...lgProps,
      ...xlProps,
    })

    return classes
  }

  render() {
    const { children } = this.props
    const classes = this.buildClasses()
    const componentProps = omit(this.props, [
      'children',
      'className',
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
  alignement: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'top',
    'middle',
    'bottom',
  ]),
  distribution: PropTypes.oneOf(['around', 'between']),
})

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  reverse: PropTypes.bool,
  xs: sizePropTypes,
  sm: sizePropTypes,
  md: sizePropTypes,
  lg: sizePropTypes,
  xl: sizePropTypes,
}

export default Row
