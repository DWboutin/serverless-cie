import React from 'react'
import moment from 'moment'
import API from '@aws-amplify/api'
import { injectIntl } from 'react-intl'
import {
  Linking,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native'

import { withNotificationContext } from './contexts/NotificationContext'
import { withAuthContext } from './contexts/AuthContext'

import TouchableItem from './_components/TouchableItem'
import EmailIcon from './_components/svgs/EmailIcon'
import SMSIcon from './_components/svgs/SMSIcon'
import PhoneIcon from './_components/svgs/PhoneIcon'
import Logo from './_components/Logo'
import Marker from './_components/svgs/Marker'

class Lead extends React.Component {
  static navigationOptions = ({
    screenProps: { intlFormatMessage, leads },
    navigation,
  }) => {
    if (leads) {
      const id = navigation.getParam('id', 'NO-ID')
      const lead = leads.filter(lead => lead.dealInfosId === id)[0]

      return {
        title:
          `${lead.deal.firstName} ${lead.deal.lastName} - ${lead.deal.city} - ` +
          navigation.getParam('id', 'NO-ID'),
      }
    }

    return {
      title: '',
    }
  }

  constructor(props) {
    super(props)

    this.handleEmailPress = this.handleEmailPress.bind(this)
    this.handleSmsPress = this.handleSmsPress.bind(this)
    this.handlePhonePress = this.handlePhonePress.bind(this)
    this.handleMapPress = this.handleMapPress.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo)
  }

  async componentDidMount() {
    const { leads, refreshLeads } = this.props

    if (leads === null) {
      await refreshLeads()
    }
  }

  handleEmailPress() {
    const { leads, navigation } = this.props
    const id = navigation.getParam('id', 'NO-ID')

    if (leads !== null) {
      const lead = leads.filter(lead => lead.dealInfosId === id)[0]

      API.post('contractors', '/requester-contact', {
        body: {
          dealInfosId: id,
          contactMethod: 'email',
        },
      })

      Linking.openURL(`mailto:${lead.deal.email}`)
    }
  }

  handleSmsPress() {
    const { leads, navigation } = this.props
    const id = navigation.getParam('id', 'NO-ID')

    if (leads !== null) {
      const lead = leads.filter(lead => lead.dealInfosId === id)[0]

      API.post('contractors', '/requester-contact', {
        body: {
          dealInfosId: lead.dealInfosId,
          contactMethod: 'sms',
        },
      })

      Linking.openURL(`sms:${lead.deal.phone}`)
    }
  }

  handlePhonePress() {
    const { intl, navigation, leads, addNotification } = this.props
    const id = navigation.getParam('id', 'NO-ID')

    if (leads !== null) {
      const lead = leads.filter(lead => lead.dealInfosId === id)[0]

      if (lead.firstContact === 0) {
        const callLanguage = intl.locale === 'fr' ? 'fr-CA' : 'en-US'

        addNotification({
          title: intl.formatMessage({ id: 'lead_call_ongoing_modal_title' }),
          message: intl.formatMessage(
            { id: 'lead_call_ongoing_modal_text' },
            {
              number: '+18557730609',
            }
          ),
          timeout: 20000,
        })

        alert(intl.locale)

        API.post('contractors', '/call-requester', {
          body: {
            dealInfosId: id,
            phoneNumber: this.props.contact.phone,
            message: intl.formatMessage({
              id: 'twilio_redirection_call_message',
            }),
            language: callLanguage,
          },
        })
      } else {
        Linking.openURL(`tel:${lead.deal.phone}`)
      }
    }
  }

  handleMapPress() {
    const { intl } = this.props

    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    })
    const latLng = `46.81332219999999,-71.22411439999996`
    const label = `Mikael Boutin\n${intl.formatMessage({
      id: `labelJobType_asphalt_and_gravel`,
    })} - ${intl.formatMessage({
      id: `labelJobTypeSpecific_flat`,
    })}`
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    })

    Linking.openURL(url)
  }

  render() {
    const { intl, navigation, leads } = this.props
    const id = navigation.getParam('id', 'NO-ID')

    let comp = null

    if (leads !== null) {
      const leadsFiltered = leads.filter(lead => lead.dealInfosId === id)
      const lead = leadsFiltered[0]

      comp = (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Logo suffixId="roofing" type="roofing" style={styles.logo} />
            </View>
            <View style={styles.opportunityIdContainer}>
              <Text style={styles.opportunityId}>{id}</Text>
              <Text style={styles.opportunityDate}>
                {moment(lead.createdAt).fromNow()}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.infoContainerRow,
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E1E6',
            }}
          >
            <View style={styles.infoContainerBlock}>
              <Text style={styles.infoContainerBlock_label}>
                {intl.formatMessage({
                  id: 'leads_card_roofing_labelRequester',
                })}
              </Text>
              <Text style={styles.infoContainerBlock_value}>
                {lead.deal.firstName} {lead.deal.lastName}
              </Text>
            </View>
            <View style={styles.infoContainerBlock}>
              <Text
                style={{
                  ...styles.infoContainerBlock_label,
                  textAlign: 'right',
                }}
              >
                {intl.formatMessage({
                  id: 'leads_card_roofing_labelContactPreference',
                })}
              </Text>
              <Text
                style={{
                  ...styles.infoContainerBlock_value,
                  textAlign: 'right',
                }}
              >
                {lead.deal.preferredContactTime
                  .split(', ')
                  .map(contactTime =>
                    intl.formatMessage({
                      id: `leads_card_contactTime_${contactTime}`,
                    })
                  )
                  .join(', ')}
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.content}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity style={styles.map} onPress={this.handleMapPress}>
              <Image
                source={{
                  uri:
                    'https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png',
                }}
                style={{ width: '100%', height: 240 }}
              />
            </TouchableOpacity>
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
                    {lead.deal.city}, {lead.deal.state}
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
                      id: `labelJobType_${lead.deal.jobType}`,
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
                      id: `labelJobTypeSpecific_${lead.deal.jobTypeSpecific}`,
                    })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsContainerText}>
                {lead.deal.jobInfo}
              </Text>
            </View>
          </ScrollView>
          <View style={styles.buttonsContainer}>
            <TouchableItem
              style={styles.button}
              onPress={this.handleEmailPress}
            >
              <View style={styles.buttonText}>
                <EmailIcon width={30} height={30} fill="#fff" />
              </View>
            </TouchableItem>
            <TouchableItem
              style={{ ...styles.button, ...styles.buttonMiddle }}
              onPress={this.handleSmsPress}
            >
              <View style={styles.buttonText}>
                <SMSIcon width={30} height={30} fill="#fff" />
              </View>
            </TouchableItem>
            <TouchableItem
              style={{ ...styles.button }}
              onPress={this.handlePhonePress}
            >
              <View style={styles.buttonText}>
                <PhoneIcon width={30} height={30} fill="#fff" />
              </View>
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
    backgroundColor: '#26b89f',
  },
  buttonMiddle: {
    borderLeftWidth: 1,
    borderLeftColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'styrene-a-medium',
  },
  header: {
    margin: 15,
    marginBottom: 0,
    flexDirection: 'row',
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

export default withNotificationContext(withAuthContext(injectIntl(Lead)))
