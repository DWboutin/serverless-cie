import React from 'react'
import { injectIntl } from 'react-intl'
import { StyleSheet, Animated, View, TextInput } from 'react-native'

import InputError from './InputError'

import easing from '../helpers/easing'
import ChartCount from './ChartCount'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      labelTopPosition:
        props.value.length > 0
          ? new Animated.Value(-4)
          : new Animated.Value(16),
      labelFontSize:
        props.value.length > 0
          ? new Animated.Value(10)
          : new Animated.Value(12),
    }

    this.input = React.createRef()

    this.handleLabelClick = this.handleLabelClick.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleLabelClick() {
    this.input.current.focus()
  }

  handleInputFocus() {
    if (this.props.label) {
      Animated.parallel([
        Animated.timing(this.state.labelTopPosition, {
          toValue: -4,
          easing: easing,
          duration: 300,
        }),
        Animated.timing(this.state.labelFontSize, {
          toValue: 10,
          easing: easing,
          duration: 300,
        }),
      ]).start(() => {
        if (typeof this.props.onFocus === 'function') {
          this.props.onFocus()
        }
      })
    }
  }

  handleInputBlur() {
    if (
      this.props.label &&
      (typeof this.props.value !== 'undefined' && this.props.value.length === 0)
    ) {
      Animated.parallel([
        Animated.timing(this.state.labelTopPosition, {
          toValue: 16,
          easing: easing,
          duration: 300,
        }),
        Animated.timing(this.state.labelFontSize, {
          toValue: 12,
          easing: easing,
          duration: 300,
        }),
      ]).start(() => {
        if (typeof this.props.onBlur === 'function') {
          this.props.onBlur()
        }
      })
    }
  }

  render() {
    const { labelTopPosition, labelFontSize } = this.state
    const {
      intl,
      label,
      value,
      error,
      onChangeText,
      secureTextEntry,
      style,
      type,
      editable,
      clearButtonMode,
      returnKeyType,
    } = this.props
    const inputStyle = [styles.input]

    if (editable === false) {
      inputStyle.push({
        color: '#545454',
      })
    }

    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={inputStyle}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            value={value}
            keyboardType={type}
            editable={editable}
            clearButtonMode={clearButtonMode}
            returnKeyType={returnKeyType}
            ref={this.input}
          />
          {label && (
            <Animated.Text
              style={{
                ...styles.label,
                top: labelTopPosition,
                fontSize: labelFontSize,
              }}
              onPress={this.handleLabelClick}
            >
              {label}
            </Animated.Text>
          )}
        </View>
        {error && <InputError>{intl.formatMessage({ id: error })}</InputError>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 15,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
  },
  label: {
    position: 'absolute',
    left: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#ffffff',
    fontFamily: 'sailec-regular',
    color: '#572d2d',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
    borderRadius: 10,
    paddingTop: 4,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 12,
    fontFamily: 'sailec-regular',
    color: '#572d2d',
  },
})

Input.defaultProps = {
  value: '',
  type: 'default',
  editable: true,
  clearButtonMode: 'never',
  returnKeyType: null,
}

export default injectIntl(Input)
