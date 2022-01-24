import React from 'react'
import { withFormik } from 'formik'
import { injectIntl } from 'react-intl'
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, ScrollView, View } from 'react-native'
import Constants from 'expo-constants'

import AddressAutocompleteInput from '../_components/AddressAutocompleteInput'
import DropdownInput, { DropdownInputItem } from '../_components/DropdownInput'
import Button from '../_components/Button'

import myCompanyFormValidation from './MyCompanyForm/myCompanyFormValidation'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
}
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
}

class AddressesForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: {
        latitude: props.values.addressLatitude,
        longitude: props.values.addressLongitude,
      },
      range: props.values.addressRange,
    }

    this.handleAddressClick = this.handleAddressClick.bind(this)
    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    alert('error')
    console.log(error)
    console.log('\n\n\n')
    console.log(errorInfo)
  }

  handleAddressClick(data, details) {
    const { setFieldValue } = this.props
    const addressObj = {}

    details.address_components.forEach(addressComponent => {
      if (addressComponent.types.indexOf('street_number') >= 0) {
        addressObj.number = addressComponent.long_name
      } else if (addressComponent.types.indexOf('route') >= 0) {
        addressObj.address = addressComponent.long_name
      } else if (addressComponent.types.indexOf('locality') >= 0) {
        addressObj.city = addressComponent.long_name
      } else if (
        addressComponent.types.indexOf('administrative_area_level_1') >= 0
      ) {
        addressObj.state = addressComponent.short_name
      } else if (addressComponent.types.indexOf('country') >= 0) {
        addressObj.country = addressComponent.short_name
      } else if (addressComponent.types.indexOf('postal_code') >= 0) {
        addressObj.postalCode = addressComponent.long_name
      }
    })

    this.setState(
      {
        center: {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
      },
      () => {
        setFieldValue('addressAuto', details.formatted_address)
        setFieldValue('addressNumber', addressObj.number)
        setFieldValue('addressAddress', addressObj.address)
        setFieldValue('addressCity', addressObj.city)
        setFieldValue('addressPostalCode', addressObj.postalCode)
        setFieldValue('addressState', addressObj.state)
        setFieldValue('addressLatitude', details.geometry.location.lat)
        setFieldValue('addressLongitude', details.geometry.location.lng)
      }
    )
  }

  handleRangeChange(value) {
    const { setFieldValue } = this.props

    this.setState(
      {
        range: value,
      },
      () => {
        setFieldValue('addressRange', value)
      }
    )
  }

  render() {
    const {
      intl,
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props

    return (
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <MapView
          camera={{
            center: this.state.center,
            pitch: 0,
            heading: 0,
            altitude: 5000,
            zoom: 10,
          }}
          style={styles.map}
          // provider={PROVIDER_GOOGLE}
          // onMapReady={e => {
          //   alert('map is ready ' + JSON.stringify(Constants.manifest, null, 2))
          //   alert(JSON.stringify(e.nativeEvent))
          // }}
        >
          <Marker coordinate={this.state.center} />
          <Circle
            center={this.state.center}
            radius={this.state.range * 1000}
            strokeColor="rgba(255,0,0,0.8)"
            strokeWidth={2}
            fillColor="rgba(255,0,0,0.35)"
          />
        </MapView>
        <View style={styles.section}>
          <AddressAutocompleteInput
            label={intl.formatMessage({
              id: 'account_addressesForm_title',
            })}
            minLength={8} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="true" // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            enablePoweredByContainer={false}
            // suppressDefaultStyles={true}
            onPress={this.handleAddressClick}
            onChangeText={handleChange('addressAuto')}
            onBlur={handleBlur('addressAuto')}
            value={values.addressAuto}
            error={errors.addressAuto}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyAn3_fdpkns7GBZWFD42K9w5OzjAfJnfow',
              language: 'en', // language of the results
              components: 'country:ca',
            }}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              country: ['ca'],
              componentRestrictions: {
                country: 'ca',
              },
            }}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
              type: 'locality',
            }}
            GooglePlacesDetailsQuery={{
              // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
              // fields: 'formatted_address',
              types: ['locality'],
              country: ['ca'],
              components: 'country:ca',
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={[homePlace, workPlace]}
            debounce={450}
          />
          <View style={styles.dropdownContainer}>
            <DropdownInput
              value={this.state.range}
              label={intl.formatMessage({
                id: 'account_addressesForm_addressRange_label',
              })}
              onValueChange={this.handleRangeChange}
              style={{
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              <DropdownInputItem value={5} label="5km" />
              <DropdownInputItem value={10} label="10km" />
              <DropdownInputItem value={15} label="15km" />
              <DropdownInputItem value={20} label="20km" />
              <DropdownInputItem value={25} label="25km" />
              <DropdownInputItem value={30} label="30km" />
              <DropdownInputItem value={35} label="35km" />
              <DropdownInputItem value={40} label="40km" />
              <DropdownInputItem value={45} label="45km" />
              <DropdownInputItem value={50} label="50km" />
            </DropdownInput>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleSubmit}>
            {intl.formatMessage({ id: 'account_addressesForm_submitButton' })}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  activeSwitchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeSwitchTitle: {
    fontFamily: 'styrene-a-medium',
    fontSize: 18,
    color: '#572d2d',
    marginTop: 21,
    marginBottom: 21,
  },
  dropdownContainer: {
    width: '100%',
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
    zIndex: -1,
  },
  map: {
    marginTop: 10,
    marginBottom: 21,
    width: '100%',
    height: 240,
    borderRadius: 10,
    overflow: 'hidden',
  },
})

const AddressesFormik = withFormik({
  mapPropsToValues: () => ({
    addressAuto: '',
    addressRange: 20,
    addressNumber: '',
    addressAddress: '',
    addressCity: '',
    addressPostalCode: '',
    addressState: '',
    addressLatitude: 46.81332219999999,
    addressLongitude: -71.22411439999996,
  }),

  validationSchema: myCompanyFormValidation,
  validateOnBlur: false,
  validateOnChange: false,

  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },

  displayName: 'addressesForm',
})(AddressesForm)

export default injectIntl(AddressesFormik)
