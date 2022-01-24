import React from 'react'
import moment from 'moment'
import API from '@aws-amplify/api'
import { injectIntl } from 'react-intl'
import { StyleSheet, Text, View } from 'react-native'

import shadow from '../helpers/shadow'

import CCAmex from './svgs/CCAmex'
import CCDefault from './svgs/CCDefault'
import CCMastercard from './svgs/CCMastercard'
import CCVisa from './svgs/CCVisa'

import Button from './Button'

class CardAddress extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddressRemove = this.handleAddressRemove.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    const { intl, addNotification } = this.props

    addNotification({
      title: intl.formatMessage({
        id: 'generic_component_error_title',
      }),
      message: intl.formatMessage(
        {
          id: 'generic_component_error_description',
        },
        {
          error: error,
          info: errorInfo,
        }
      ),
      timeout: 7000,
    })
  }

  async handleAddressRemove() {
    const {
      intl,
      addNotification,
      refreshAddresses,
      id,
      number,
      address,
      postalCode,
      city,
      state,
    } = this.props

    await API.del('contractors', `/company/address/${id}`, {})
    await refreshAddresses()

    addNotification({
      title: intl.formatMessage({
        id: 'account_addresses_card_notice_delete_title',
      }),
      message: intl.formatMessage(
        { id: 'account_addresses_card_notice_delete_text' },
        {
          number,
          address,
          postalCode,
          city,
          state,
        }
      ),
      timeout: 7000,
    })
  }

  render() {
    const {
      intl,
      number,
      address,
      postalCode,
      city,
      state,
      createdAt,
    } = this.props

    return (
      <View style={styles.card}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{moment(createdAt).fromNow()}</Text>
        </View>
        <View style={styles.cardRow}>
          <View>
            <Text style={styles.addressText}>
              {number} {address}
            </Text>
            <Text style={styles.addressText}>
              {postalCode}, {city}, {state}, CA
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button type="bordered" onPress={this.handleAddressRemove}>
            {intl.formatMessage({
              id: 'account_addresses_card_deleteButton',
            })}
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    borderRadius: 10,
    marginBottom: 21,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  addressText: {
    fontFamily: 'sailec-regular',
    fontSize: 14,
    color: '#572D2D',
  },
  dateText: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#b5a4a0',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
})

export default injectIntl(CardAddress)
