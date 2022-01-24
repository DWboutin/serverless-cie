import React from 'react'
import moment from 'moment'
import { injectIntl } from 'react-intl'
import * as LocalAuthentication from 'expo-local-authentication'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'

import { withAuthContext } from './contexts/AuthContext'
import { withNotificationContext } from './contexts/NotificationContext'

import TouchableItem from './_components/TouchableItem'
import Logo from './_components/Logo'
import Marker from './_components/svgs/Marker'

class Opportunity extends React.Component {
  static navigationOptions = ({
    screenProps: { intlFormatMessage },
    navigation,
  }) => ({
    title: navigation.getParam('id', 'NO-ID'),
  })

  constructor(props) {
    super(props)

    this.handleAcceptation = this.handleAcceptation.bind(this)
    this.handleRejection = this.handleRejection.bind(this)
  }

  handleHardwareAuth() {
    return new Promise(async (resolve, reject) => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync()

      if (hasHardware) {
        const hardwareAuth = await LocalAuthentication.authenticateAsync()

        if (hardwareAuth.success === true) {
          resolve(hardwareAuth)
        } else {
          reject(hardwareAuth)
        }
      } else {
        reject(hasHardware)
      }
    })
  }

  handleAcceptation() {
    const {
      intl,
      navigation,
      refreshLeads,
      opportunities,
      addNotification,
      organization: {
        custom_fields: { stripeSource },
      },
    } = this.props
    const id = navigation.getParam('id', 'NO-ID')
    const opportunitiesFiltered = opportunities.filter(
      opportunity => opportunity.dealInfosId === id
    )
    const companyId = opportunitiesFiltered[0].companyId
    const dealId = opportunitiesFiltered[0].dealId

    if (stripeSource) {
      this.handleHardwareAuth()
        .then(async () => {
          // await API.post(
          //   'contractors',
          //   `/deal/accept/${dealId}/${companyId}/native-app`,
          //   {}
          // )

          refreshLeads()

          addNotification({
            title: intl.formatMessage({
              id: 'opportunity_acceptedDeal_modal_title',
            }),
            message: intl.formatMessage({
              id: 'opportunity_acceptedDeal_modal_text',
            }),
            timeout: 7000,
            action: `to:Lead:${id}`,
          })
        })
        .catch(e => {
          console.log(e)
          addNotification({
            title: intl.formatMessage({
              id: 'signIn_form_notice_error_undefined_title',
            }),
            message: intl.formatMessage({
              id: 'signIn_form_notice_error_undefined_description',
            }),
            timeout: 10000,
          })
        })
    } else {
      addNotification({
        title: intl.formatMessage({
          id: 'opportunity_paymentMethod_modal_title',
        }),
        message: intl.formatMessage({
          id: 'opportunity_paymentMethod_modal_text',
        }),
        timeout: 0,
        action: 'to:PaymentMethod',
      })
    }
  }

  handleRejection() {
    const { intl, navigation, addNotification } = this.props
    const id = navigation.getParam('id', 'NO-ID')

    addNotification({
      title: intl.formatMessage({
        id: 'cardOpportunity_onRejection_notice_title',
      }),
      message: intl.formatMessage(
        { id: 'cardOpportunity_onRejection_notice_text' },
        {
          dealInfosId: id,
        }
      ),
      timeout: 7000,
    })
  }

  render() {
    const { intl, navigation, opportunities } = this.props
    const id = navigation.getParam('id', 'NO-ID')
    const acceptButtonStyle = StyleSheet.flatten([
      styles.button,
      styles.acceptButton,
    ])
    const refuseButtonStyle = StyleSheet.flatten([
      styles.button,
      styles.refuseNutton,
    ])
    const opportunitiesFiltered = opportunities.filter(
      opportunity => opportunity.dealInfosId === id
    )

    let comp = null

    if (opportunitiesFiltered.length === 1) {
      const opportunity = opportunitiesFiltered[0]

      comp = (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Logo suffixId="roofing" type="roofing" style={styles.logo} />
            </View>
            <View style={styles.opportunityIdContainer}>
              <Text style={styles.opportunityId}>{id}</Text>
              <Text style={styles.opportunityDate}>
                {moment(opportunity.createdAt).fromNow()}
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.map}>
              <Image
                source={{
                  uri: `https://s3.amazonaws.com/dev-static-maps/${id}.png`,
                }}
                style={{ width: '100%', height: 240 }}
              />
            </View>
            <View style={styles.baseDetailsContainer}>
              <View style={styles.infoContainerRow}>
                <View style={styles.infoContainerBlock}>
                  <Text style={styles.infoContainerBlock_label}>
                    {intl.formatMessage({
                      id: 'opportunities_card_roofing_labelCity',
                    })}
                  </Text>
                  <Text style={styles.infoContainerBlock_value}>
                    <Marker style={{ marginRight: 10 }} />
                    {opportunity.deal.city}, {opportunity.deal.state}
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
                      id: `labelJobType_asphalt_and_gravel`,
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
                      id: `labelJobTypeSpecific_flat`,
                    })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsContainerText}>
                {opportunity.deal.jobInfo}
              </Text>
            </View>
          </ScrollView>
          <View style={styles.buttonsContainer}>
            <TouchableItem
              style={refuseButtonStyle}
              onPress={this.handleRejection}
            >
              <Text style={styles.buttonText}>
                {intl.formatMessage({
                  id: 'opportunities_card_btn_reject',
                })}
              </Text>
            </TouchableItem>
            <TouchableItem
              style={acceptButtonStyle}
              onPress={this.handleAcceptation}
            >
              <Text style={styles.buttonText}>
                {intl.formatMessage({
                  id: 'opportunities_card_btn_accept',
                })}
              </Text>
            </TouchableItem>
          </View>
        </View>
      )
    }

    return comp
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  buttonsContainer: {
    height: 80,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'styrene-a-medium',
  },
  acceptButton: {
    backgroundColor: '#26b89f',
  },
  refuseNutton: {
    backgroundColor: '#fe5143',
  },
  header: {
    padding: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
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
  baseDetailsContainer: {
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
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
  detailsContainer: {
    padding: 15,
    paddingTop: 10,
    marginBottom: 15,
  },
  detailsContainerText: {
    fontFamily: 'sailec-regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#572d2d',
    marginBottom: 21,
  },
})

export default withNotificationContext(withAuthContext(injectIntl(Opportunity)))
