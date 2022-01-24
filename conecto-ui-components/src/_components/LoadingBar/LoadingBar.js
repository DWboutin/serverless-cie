import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const LoadingPercent = ({ style }) => (
  <div className="loading-percent" style={{ ...style }} />
)

class LoadingBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
    }

    this.classesPrefix = 'to-loading-bar'

    this.secondTimer = null
    this.getRandomValueBetween = this.getRandomValueBetween.bind(this)
  }

  static getDerivedStateFromProps(props) {
    if (props.complete === true) {
      return {
        width: 100,
      }
    }

    return null
  }

  componentDidMount() {
    this.setState(
      {
        width: `${this.getRandomValueBetween(20, 50)}`,
      },
      () => {
        this.secondTimer = setTimeout(() => {
          this.setState({
            width: `${this.getRandomValueBetween(50, 80)}`,
          })
        }, 300)
      }
    )
  }

  componentWillUnmount() {
    clearTimeout(this.secondTimer)
  }

  getRandomValueBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    const { className, fixed } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className,
    })
    const style = { width: `${this.state.width}%` }
    const fixedStyle = fixed ? { position: 'fixed' } : null

    return (
      <div className={classes} style={fixedStyle}>
        <LoadingPercent style={style} />
      </div>
    )
  }
}

class LoadingBarParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialized: false,
      complete: false,
    }

    this.timer = null
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isLoading === false && state.initialized === true) {
      return {
        complete: true,
      }
    }

    return null
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.isLoading === false &&
      this.state.complete === true &&
      this.state.initialized === true
    ) {
      this.timer = setTimeout(() => {
        this.setState({
          initialized: false,
        })
      }, 1000)
    }

    if (prevProps.isLoading === false && this.props.isLoading === true) {
      this.setState({
        initialized: true,
      })
    }
  }

  render() {
    const { isLoading, container, fixed, className, type } = this.props
    const defaultParent =
      typeof window !== 'undefined' ? window.document.body : null
    const parent = container ? container : defaultParent
    let comp = null

    if (isLoading || this.state.initialized) {
      comp = ReactDOM.createPortal(
        <LoadingBar
          className={className}
          fixed={fixed}
          type={type}
          complete={this.state.complete}
        />,
        parent
      )
    }

    return comp
  }
}

LoadingBarParent.defaultProps = {
  isLoading: false,
  fixed: false,
  type: PropTypes.oneOf(['primary', 'roofing']),
}

LoadingBarParent.propTypes = {}

export default LoadingBarParent
