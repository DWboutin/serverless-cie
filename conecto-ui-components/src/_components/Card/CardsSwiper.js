import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class CardsSwiper extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-cards-swiper'

    this.swiper = null
    this.defaultOptions = {
      speed: 500,
      slidesPerView: 3,
      spaceBetween: 40,
      // simulateTouch: false,
      breakpoints: {
        576: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    }
  }

  componentDidMount() {
    const { id } = this.props

    this.swiper = new Swiper(`#${id}`, {
      ...this.defaultOptions,
      ...this.props.options,
    })
  }

  componentWillUnmount() {
    this.swiper.destroy(true, true)
  }

  componentDidUpdate() {
    this.swiper.update()
  }

  render() {
    const { id, className, withIcons } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      'swiper-container': true,
      'with-icons': withIcons,
      [`${className}`]: className,
    })

    return (
      <div id={id} className={classes}>
        <div className="swiper-wrapper">
          {React.Children.map(this.props.children, (child, index) => (
            <div className="swiper-slide">{child}</div>
          ))}
        </div>
      </div>
    )
  }
}

CardsSwiper.defaultProps = {
  withIcons: false,
  options: {},
}

CardsSwiper.propTypes = {
  id: PropTypes.string.isRequired,
  withIcons: PropTypes.bool.isRequired,
  options: PropTypes.object.isRequired,
}

export default CardsSwiper
