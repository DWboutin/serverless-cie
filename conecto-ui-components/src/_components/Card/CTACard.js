import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

const CTACard = ({
  className,
  children,
  image,
  button,
  withOverlap,
  ...props
}) => {
  const classes = classNames({
    'to-card': true,
    'to-card-cta': true,
    'with-overlap': withOverlap,
    [`${className}`]: className,
  })
  const componentProps = omit(props, [
    'className',
    'children',
    'image',
    'button',
    'withOverlap',
  ])

  return (
    <div className={classes} {...componentProps}>
      <div className="content">{children}</div>
      <div className="cta">
        <div className="image">
          <div className="image-wrap">{image}</div>
          {button}
        </div>
      </div>
    </div>
  )
}

CTACard.defaultProps = {
  withOverlap: false,
}

CTACard.propTypes = {
  withOverlap: PropTypes.bool.isRequired,
  button: PropTypes.element.isRequired,
  children: PropTypes.any.isRequired,
  image: PropTypes.node.isRequired,
}

export default CTACard
