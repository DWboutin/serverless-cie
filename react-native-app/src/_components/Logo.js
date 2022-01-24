import React from 'react'
import { injectIntl } from 'react-intl'
import { StyleSheet, View, Text } from 'react-native'

import Conecto from './svgs/Conecto'

const Logo = ({ intl, suffixId, type, onPress, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Conecto style={styles.logo} />
    <View
      style={StyleSheet.flatten([
        styles.suffixContainer,
        styles[`suffixContainer_${type}`],
      ])}
    >
      <Text>
        <Text style={styles.suffix}>
          {intl.formatMessage({ id: suffixId })}
        </Text>
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  logo: {
    marginRight: 5,
    marginBottom: 5,
  },
  suffixContainer: {
    height: 20,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
    borderRadius: 5,
  },
  suffixContainer_contractor: {
    backgroundColor: '#26B89F',
  },
  suffixContainer_roofing: {
    backgroundColor: '#FE5143',
  },
  suffix: {
    color: '#fff',
    fontFamily: 'gt-pressura',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
})

Logo.defaultProps = {
  style: {},
  type: 'contractor',
  suffixId: 'contractor',
}

export default injectIntl(Logo)
