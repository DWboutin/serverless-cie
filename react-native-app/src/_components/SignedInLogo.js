import React from 'react'
import { injectIntl } from 'react-intl'
import { withNavigation } from 'react-navigation'
import { StyleSheet, View, Text } from 'react-native'

import Conecto from './svgs/Conecto'
import TouchableItem from './TouchableItem'

const SignedInLogo = ({ intl, suffixId, onPress, style, navigation }) => (
  <TouchableItem
    style={StyleSheet.flatten([styles.container, style])}
    onPress={() => navigation.navigate('Dashboard')}
  >
    <Conecto style={styles.logo} />
    <View style={styles.suffixContainer}>
      <Text>
        <Text style={styles.suffix}>
          {intl.formatMessage({ id: suffixId })}
        </Text>
      </Text>
    </View>
  </TouchableItem>
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
    backgroundColor: '#26B89F',
    borderRadius: 5,
  },
  suffix: {
    color: '#fff',
    fontFamily: 'gt-pressura',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
})

SignedInLogo.defaultProps = {
  style: {},
  suffixId: 'contractor',
}

export default injectIntl(withNavigation(SignedInLogo))
