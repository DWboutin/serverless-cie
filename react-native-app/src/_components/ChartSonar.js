import React from 'react'
import { StyleSheet, View, Text, Easing } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import Bookmark from './svgs/Bookmark'
import Marker from './svgs/Marker'

import shadow from '../helpers/shadow'

const ChartSonar = ({ title, number }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Bookmark color="#26b89f" />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.externalCircle}>
        <View style={styles.innerGreyCircle}>
          <View style={styles.innerWhiteCircle}>
            <AnimatedCircularProgress
              size={60}
              width={0}
              fill={number}
              tintColor="#fff"
              backgroundColor="#fff"
              duration={800}
              easing={Easing.out(Easing.bezier(0.165, 0.84, 0.44, 1))}
            >
              {fill => (
                <Text style={styles.progressNumber}>{Math.round(fill)}</Text>
              )}
            </AnimatedCircularProgress>
            <Marker
              height="24px"
              width="24px"
              color="#26b89f"
              style={{
                position: 'absolute',
                bottom: -12,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    padding: 15,
    marginBottom: 15,
    minHeight: 300,
  },
  progressNumber: {
    fontFamily: 'styrene-a-regular',
    fontSize: 28,
    color: '#572d2d',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f1e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'sailec-regular',
    lineHeight: 40,
    paddingLeft: 10,
  },
  externalCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerGreyCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E5E1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerWhiteCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
})

ChartSonar.defaultProps = {
  title: '',
  percent: 70,
  noticeSign: '+',
  noticePercent: 7.5,
}

export default ChartSonar
