import React from 'react'
import { Text } from 'react-native'
import { injectIntl } from 'react-intl'

const FormattedMessage = ({ intl, id, style }) => (
  <Text style={style}>{intl.formatMessage({ id })}</Text>
)

FormattedMessage.defaultProps = {
  id: '',
  style: {},
}

export default injectIntl(FormattedMessage)
