import React from 'react'
import { injectIntl } from 'react-intl'
import { StyleSheet, View, Text, Switch, Picker } from 'react-native'

import InputError from './InputError'

class DropdownInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: false,
    }

    this.picker = React.createRef()

    this.handleSwitchClick = this.handleSwitchClick.bind(this)
  }

  handleSwitchClick() {
    this.setState({
      value: !this.state.value,
    })
  }

  render() {
    const {
      intl,
      label,
      value,
      error,
      onValueChange,
      style,
      children,
    } = this.props

    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputContainer}>
          {label && <Text style={styles.label}>{label}</Text>}
          <Picker
            value={value}
            selectedValue={value}
            style={styles.input}
            itemStyle={styles.inputItemStyle}
            onValueChange={onValueChange}
            ref={this.picker}
            mode="dialog"
          >
            {children}
          </Picker>
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
  },
  label: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#572d2d',
  },
  input: {
    paddingTop: 0,
    marginTop: 0,
    width: '100%',
    height: 120,
    fontSize: 12,
    fontFamily: 'sailec-regular',
  },
  inputItemStyle: {
    flex: 1,
    color: '#572d2d',
  },
})

export const DropdownInputItem = ({ label, value }) => (
  <Picker.Item label="Java" value="java" />
)

export default injectIntl(DropdownInput)
