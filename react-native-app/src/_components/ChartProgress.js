import React from 'react'
import { StyleSheet, View, Text, Easing } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import Bookmark from './svgs/Bookmark'

const ChartProgress = ({
  title,
  percent,
  noticeSign,
  noticePercent,
  noticeLabel,
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Bookmark color="#26b89f" />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.progress}>
        <AnimatedCircularProgress
          size={160}
          width={15}
          fill={percent}
          tintColor="#26b89f"
          backgroundColor="#f5f1e8"
          duration={1200}
          rotation={0}
          lineCap="round"
          easing={Easing.out(Easing.bezier(0.77, 0, 0.175, 1))}
        >
          {fill => (
            <Text
              style={styles.progressNumber}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              {Math.round(fill)}
              {noticeSign}
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>
      {noticeLabel && (
        <View style={styles.notice}>
          <Text style={styles.noticeText}>{noticeSign}</Text>
          <AnimatedCircularProgress
            size={20}
            width={0}
            fill={noticePercent}
            tintColor="#fff"
            backgroundColor="#fff"
            duration={800}
            easing={Easing.out(Easing.bezier(0.165, 0.84, 0.44, 1))}
          >
            {fill => <Text style={styles.noticeText}>{fill.toFixed(1)}</Text>}
          </AnimatedCircularProgress>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.noticeText}
          >
            % / {noticeLabel}
          </Text>
        </View>
      )}
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
  progress: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
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
  notice: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noticeText: {
    fontFamily: 'styrene-a-regular',
    fontSize: 12,
    color: '#26b89f',
  },
})

ChartProgress.defaultProps = {
  title: '',
  percent: 70,
  noticeSign: '+',
  noticePercent: 7.5,
}

export default ChartProgress
