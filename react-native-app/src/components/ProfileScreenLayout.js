import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

const ProfileScreenLayout = ({ title, children }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <ScrollView
      style={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontFamily: 'styrene-a-medium',
    fontSize: 21,
    color: '#572d2d',
  },
  contentContainer: {
    padding: 15,
    paddingTop: 0,
  },
})

export default ProfileScreenLayout
