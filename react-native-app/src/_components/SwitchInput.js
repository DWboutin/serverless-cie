import React from 'react'
import { injectIntl } from 'react-intl'
import { StyleSheet, View, Text, Switch } from 'react-native'

import InputError from './InputError'

class SwitchInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: false,
    }

    this.switch = React.createRef()

    this.handleLabelClick = this.handleLabelClick.bind(this)
    this.handleSwitchClick = this.handleSwitchClick.bind(this)
  }

  handleLabelClick() {
    this.input.current.focus()
  }

  handleSwitchClick() {
    this.setState({
      value: !this.state.value,
    })
  }

  render() {
    const { intl, label, value, error, onValueChange, style } = this.props

    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputContainer}>
          {label && (
            <Text style={styles.label} onPress={this.handleLabelClick}>
              {label}
            </Text>
          )}
          <Switch
            onValueChange={onValueChange}
            value={value}
            trackColor={{
              true: '#26B89F',
            }}
            ios_backgroundColor="#E5E1E6"
            thumbColor="#fff"
            ref={this.switch}
          />
        </View>
        {error && <InputError>{intl.formatMessage({ id: error })}</InputError>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#572d2d',
  },
  input: {
    height: 40,
    width: '100%',
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
  },
})

export default injectIntl(SwitchInput)
