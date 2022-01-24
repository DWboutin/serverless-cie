import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { BarIndicator } from 'react-native-indicators'

import Conecto from '../_components/svgs/Conecto'
import NoWifi from '../_components/svgs/NoWifi'

const LoadingScreen = ({ isOnline }) => (
  <View style={styles.container}>
    <View>
      <Conecto
        width={`${Dimensions.get('window').width * 0.578}px`}
        height={`${Dimensions.get('window').width * 0.1657381}px`}
        fill="#ffffff"
      />
      <View
        style={{
          height: 25,
        }}
      >
        <BarIndicator size={25} count={6} color="white" />
      </View>
      {!isOnline && (
        <View
          style={{
            marginTop: 30,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NoWifi />
        </View>
      )}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26B89F',
  },
})

LoadingScreen.defaultProps = {}

export default LoadingScreen
