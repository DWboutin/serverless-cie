import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import shadow from '../helpers/shadow'

const ChartCountBox = ({ percent, suffix, label, style }) => (
  <View style={styles.box}>
    <View
      style={{
        ...styles.boxPercent,
        ...style,
      }}
    >
      <AnimatedCircularProgress
        size={100}
        width={0}
        fill={percent}
        tintColor="#fff"
        backgroundColor="#fff"
      >
        {fill => (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.boxProgressNumber}
          >
            {suffix ? `${Math.round(fill)}${suffix}` : Math.round(fill)}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
    {label && (
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.boxText}>
        {label}
      </Text>
    )}
  </View>
)

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  boxProgressNumber: {
    fontFamily: 'styrene-a-regular',
    fontSize: 28,
    color: '#572d2d',
  },
  boxText: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'sailec-regular',
    padding: 10,
    color: '#572d2d',
  },
  boxPercent: {
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    ...shadow,
  },
})

ChartCountBox.defaultProps = {
  percent: 0,
}

export default ChartCountBox
