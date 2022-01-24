import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Bookmark from './svgs/Bookmark'

const ChartCount = ({ title, children }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Bookmark color="#26b89f" />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
    <View style={styles.boxPercentContainer}>
      {React.Children.map(children, (child, index) => {
        const newProps = {}

        if (index === 0) {
          newProps.style = {
            marginRight: 15,
          }
        }

        return React.cloneElement(child, newProps)
      })}
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
    paddingBottom: 0,
    minHeight: 300,
    marginBottom: 15,
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
  boxPercentContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

ChartCount.defaultProps = {
  title: '',
}

export default ChartCount
