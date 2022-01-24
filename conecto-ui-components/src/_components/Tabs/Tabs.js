import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

import TabTitle from './TabTitle'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: props.focusedIndex,
    }

    this.classesPrefix = 'to-tabs'

    this.handleTitleClick = this.handleTitleClick.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChangeCallBack } = this.props

    if (prevProps.focusedIndex !== this.props.focusedIndex) {
      this.setState({
        selectedIndex: this.props.focusedIndex,
      })
    }

    if (
      onChangeCallBack &&
      this.state.selectedIndex !== prevState.selectedIndex
    ) {
      onChangeCallBack(this.state.selectedIndex)
    }
  }

  handleTitleClick(e) {
    this.setState({
      selectedIndex: parseInt(e.target.dataset.index),
    })
  }

  renderTitles() {
    const { selectedIndex } = this.state
    const { children } = this.props

    return (
      <nav>
        <ul>
          {React.Children.map(children, (child, index) => (
            <TabTitle
              title={child.props.title}
              onClick={this.handleTitleClick}
              index={index}
              active={index === selectedIndex}
              clickDisabled={child.props.clickDisabled}
            />
          ))}
        </ul>
      </nav>
    )
  }

  render() {
    const { selectedIndex } = this.state
    const { className, children, titlePosition, fixedItem } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`title-pos-${titlePosition}`]: true,
      [`${className}`]: className,
    })

    return (
      <div className={classes}>
        {titlePosition === 'top' && this.renderTitles()}
        <div className="to-tabs-wrap">
          <div
            className="to-tabs-panels"
            style={{ marginLeft: `${selectedIndex * -100}%` }}
          >
            {React.Children.map(children, (child, index) =>
              React.cloneElement(child, {
                inactive: index !== this.state.selectedIndex,
              })
            )}
          </div>
          {fixedItem && (
            <div className="fixed-item">
              {React.cloneElement(fixedItem, {
                selectedIndex: this.state.selectedIndex,
              })}
            </div>
          )}
        </div>
        {titlePosition === 'bottom' && this.renderTitles()}
      </div>
    )
  }
}

Tabs.defaultProps = {
  titlePosition: 'top',
  focusedIndex: 0,
  fixedItem: null,
}

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  titlePosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
  focusedIndex: PropTypes.number.isRequired,
  onChangeCallBack: PropTypes.func,
  fixedItem: PropTypes.any,
}

export default Tabs
