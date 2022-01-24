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

class CardSource extends React.Component {
  constructor(props) {
    super(props)

    this.defineIconFromBrand = this.defineIconFromBrand.bind(this)
    this.handleSourceDetach = this.handleSourceDetach.bind(this)
    this.handleSourceMakeDefault = this.handleSourceMakeDefault.bind(this)
  }

  componentDidCatch(error, errorInfo) {
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

  defineIconFromBrand() {
    const { brand } = this.props

    switch (brand) {
      case 'American Express':
        return <CCAmex />
      case 'MasterCard':
        return <CCMastercard />
      case 'Visa':
        return <CCVisa />
      default:
        return <CCDefault />
    }
  }

  async handleSourceDetach() {
    const { intl, id, addNotification, refreshContact } = this.props

    await API.del('contractors', `/contact/payment/${id}`, {})
    await refreshContact()

    addNotification({
      title: intl.formatMessage({
        id: 'account_paymentMethod_source_detach_notice_title',
      }),
      message: intl.formatMessage({
        id: 'account_paymentMethod_source_detach_notice_text',
      }),
      timeout: 7000,
    })
  }

  async handleSourceMakeDefault() {
    const { intl, id, addNotification, refreshContact } = this.props

    await API.put('contractors', `/contact/payment/${id}`, {})
    await refreshContact()

    addNotification({
      title: intl.formatMessage({
        id: 'account_paymentMethod_source_make_default_notice_title',
      }),
      message: intl.formatMessage({
        id: 'account_paymentMethod_source_make_default_notice_text',
      }),
      timeout: 7000,
    })
  }

  render() {
    const { intl, isDefault, brand, createdAt, last4, exp } = this.props
    const style = isDefault
      ? StyleSheet.flatten([styles.card, shadow])
      : StyleSheet.flatten([styles.card, styles.bordered])
    const brandIcon = this.defineIconFromBrand()

    return (
      <View style={style}>
        <View style={styles.cardRow}>
          <View style={styles.headerBrand}>
            <View style={styles.brandIcon}>{brandIcon}</View>
            <Text style={styles.brandName}>{brand}</Text>
          </View>
          <Text style={styles.headerDate}>
            {moment(parseInt(`${createdAt}000`)).fromNow()}
          </Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.infoText}>{`**** **** **** ${last4}`}</Text>
          <Text
            style={{ ...styles.infoText, fontSize: 12 }}
          >{`exp.: ${exp}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {isDefault && (
            <Text style={styles.noButtonTextDefaultSource}>
              {intl.formatMessage({
                id: 'account_paymentMethod_source_card_default',
              })}
            </Text>
          )}
          {!isDefault && (
            <>
              <Button type="ghost" onPress={this.handleSourceMakeDefault}>
                {intl.formatMessage({
                  id: 'account_paymentMethod_source_make_default_card',
                })}
              </Button>
              <Button type="bordered" onPress={this.handleSourceDetach}>
                {intl.formatMessage({
                  id: 'account_paymentMethod_source_delete_card',
                })}
              </Button>
            </>
          )}
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
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
  },
  defaultSource: {
    ...shadow,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDate: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#b5a4a0',
  },
  brandIcon: {
    marginRight: 10,
  },
  brandName: {
    fontFamily: 'styrene-a-medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#572D2D',
  },
  infoText: {
    fontFamily: 'sailec-regular',
    fontSize: 14,
    color: '#572D2D',
  },
  buttonContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  noButtonTextDefaultSource: {
    fontFamily: 'sailec-regular',
    fontSize: 12,
    color: '#b5a4a0',
  },
})

export default injectIntl(CardSource)
