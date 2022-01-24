import React from 'react'
import moment from 'moment'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { injectIntl } from 'react-intl'
import { withNavigation } from 'react-navigation'

import Logo from '../_components/Logo'
import Marker from '../_components/svgs/Marker'

const CardOpportunity = ({
  intl,
  navigation,
  status,
  opportunityId,
  opportunityDate,
  valueJobType,
  valueJobTypeSpecific,
  valueCity,
  remainingSeats,
}) => {
  let remainingPlaceMessage = intl.formatMessage(
    { id: 'opportunities_card_remainingPlaces' },
    { remainingSeats: remainingSeats }
  )

  if (status === 'Rejected') {
    remainingPlaceMessage = intl.formatMessage({
      id: 'opportunities_card_rejected',
    })
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Opportunity', {
          id: opportunityId,
        })
      }
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Logo suffixId="roofing" type="roofing" style={styles.logo} />
          </View>
          <View style={styles.opportunityIdContainer}>
            <Text style={styles.opportunityId}>{opportunityId}</Text>
            <Text style={styles.opportunityDate}>
              {moment(opportunityDate).fromNow()}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.map}>
        <Image
          source={{
            uri: `https://s3.amazonaws.com/dev-static-maps/${opportunityId}.png`,
          }}
          style={{ width: '100%', height: 140, zIndex: 1 }}
        />
        {remainingSeats > 0 && (
          <View style={styles.headerRemainingPlacesContainer}>
            <View style={styles.headerRemainingPlaces}>
              <Text style={styles.headerRemainingPlacesText}>
                {remainingPlaceMessage}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainerRow}>
          <View style={styles.infoContainerBlock}>
            <Text style={styles.infoContainerBlock_label}>
              {intl.formatMessage({
                id: 'opportunities_card_roofing_labelCity',
              })}
            </Text>
            <Text style={styles.infoContainerBlock_value}>
              <Marker style={{ marginRight: 10 }} />
              {valueCity}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainerRow}>
          <View style={styles.infoContainerBlock}>
            <Text style={styles.infoContainerBlock_label}>
              {intl.formatMessage({
                id: 'opportunities_card_roofing_labelJobType',
              })}
            </Text>
            <Text style={styles.infoContainerBlock_value}>
              {intl.formatMessage({
                id: `labelJobType_${valueJobType}`,
              })}
            </Text>
          </View>
          <View style={styles.infoContainerBlock}>
            <Text style={styles.infoContainerBlock_label}>
              {intl.formatMessage({
                id: 'opportunities_card_roofing_labelJobTypeSpecific',
              })}
            </Text>
            <Text style={styles.infoContainerBlock_value}>
              {intl.formatMessage({
                id: `labelJobTypeSpecific_${valueJobTypeSpecific}`,
              })}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

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
    marginBottom: 15,
  },
  header: {
    padding: 15,
  },
  headerContent: {
    flexDirection: 'row',
  },
  headerRemainingPlacesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: -15,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 10,
  },
  headerRemainingPlaces: {
    paddingTop: 10,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E1E6',
    borderRadius: 10,
  },
  headerRemainingPlacesText: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#b5a4a0',
  },
  map: {
    zIndex: 1,
  },
  opportunityIdContainer: {
    flex: 1,
  },
  opportunityId: {
    textAlign: 'right',
    fontFamily: 'styrene-a-regular',
    fontSize: 16,
  },
  opportunityDate: {
    textAlign: 'right',
    fontFamily: 'sailec-regular',
    fontSize: 12,
    marginTop: 5,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    marginBottom: 10,
    width: 140,
  },
  content: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  infoContainerRow: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  infoContainerBlock: {
    flex: 1,
    marginBottom: 5,
  },
  infoContainerBlock_label: {
    color: '#b5a4a0',
    fontFamily: 'sailec-regular',
    fontSize: 12,
    marginBottom: 5,
  },
  infoContainerBlock_value: {
    color: '#572d2d',
    fontFamily: 'sailec-regular',
    fontSize: 14,
  },
})

export default withNavigation(injectIntl(CardOpportunity))
