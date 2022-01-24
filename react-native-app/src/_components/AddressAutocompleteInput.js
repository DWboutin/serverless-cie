// source: https://github.com/FaridSafi/react-native-google-places-autocomplete/blob/master/GooglePlacesAutocomplete.js
import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Platform,
  Keyboard,
} from 'react-native'
import Qs from 'qs'
import debounce from 'lodash.debounce'

import Input from './Input'

const WINDOW = Dimensions.get('window')

const defaultStyles = {
  container: {
    position: 'relative',
    zIndex: 100,
  },
  textInputContainer: {},
  textInput: {},
  powered: {},
  listView: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E1E6',
    borderTopWidth: 1,
    borderTopColor: '#E5E1E6',
    borderLeftWidth: 1,
    borderLeftColor: '#E5E1E6',
    borderRightWidth: 1,
    borderRightColor: '#E5E1E6',
    borderRadius: 10,
  },
  row: {
    padding: 13,
    flexDirection: 'row',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15,
  },
}

class GooglePlacesAutocomplete extends React.Component {
  _isMounted = false
  _results = []
  _requests = []

  constructor(props) {
    super(props)

    this.state = {
      selectedAddress: '',
      listViewDisplayed: false,
      dataSource: this.buildRowsFromResults([]),
    }
  }

  buildRowsFromResults = results => {
    let res = []

    if (
      results.length === 0 ||
      this.props.predefinedPlacesAlwaysVisible === true
    ) {
      res = [...this.props.predefinedPlaces]

      if (this.props.currentLocation === true) {
        res.unshift({
          description: this.props.currentLocationLabel,
          isCurrentLocation: true,
        })
      }
    }

    res = res.map(place => ({
      ...place,
      isPredefinedPlace: true,
    }))

    return [...res, ...results]
  }

  componentWillMount() {
    this._request = this.props.debounce
      ? debounce(this._request, this.props.debounce)
      : this._request
  }

  componentDidMount() {
    // This will load the default value's search results after the view has
    // been rendered
    this._handleChangeText(this.props.value)
    this._isMounted = true
  }

  componentWillReceiveProps(nextProps) {
    let listViewDisplayed = true

    if (nextProps.listViewDisplayed !== 'auto') {
      listViewDisplayed = nextProps.listViewDisplayed
    }

    if (
      typeof nextProps.value !== 'undefined' &&
      this.props.value !== nextProps.value &&
      nextProps.value !== this.state.selectedAddress
    ) {
      this.setState(
        {
          listViewDisplayed: listViewDisplayed,
        },
        this._request(nextProps.value)
      )
    } else {
      this.setState({
        listViewDisplayed: listViewDisplayed,
      })
    }
  }

  componentWillUnmount() {
    this._abortRequests()
    this._isMounted = false
  }

  _abortRequests = () => {
    this._requests.map(i => i.abort())
    this._requests = []
  }

  getCurrentLocation = () => {
    let options = {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 1000,
    }

    if (this.props.enableHighAccuracyLocation && Platform.OS === 'android') {
      options = {
        enableHighAccuracy: true,
        timeout: 20000,
      }
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        if (this.props.nearbyPlacesAPI === 'None') {
          let currentLocation = {
            description: this.props.currentLocationLabel,
            geometry: {
              location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            },
          }

          this.props.onPress(currentLocation, currentLocation)
        } else {
          this._requestNearby(
            position.coords.latitude,
            position.coords.longitude
          )
        }
      },
      error => {
        alert(error.message)
      },
      options
    )
  }

  _onPress = rowData => {
    if (
      rowData.isPredefinedPlace !== true &&
      this.props.fetchDetails === true
    ) {
      if (rowData.isLoading === true) {
        // already requesting
        return
      }

      Keyboard.dismiss()

      this._abortRequests()

      // fetch details
      const request = new XMLHttpRequest()

      this._requests.push(request)
      request.timeout = this.props.timeout
      request.ontimeout = this.props.onTimeout

      request.onreadystatechange = () => {
        if (request.readyState !== 4) return

        if (request.status === 200) {
          const responseJSON = JSON.parse(request.responseText)

          if (responseJSON.status === 'OK') {
            if (this._isMounted === true) {
              const details = responseJSON.result

              if (typeof this.props.onBlur !== 'undefined') {
                this.props.onBlur()
              }

              this.setState({
                selectedAddress: details.formatted_address,
                listViewDisplayed: false,
              })

              delete rowData.isLoading
              this.props.onPress(rowData, details)
            }
          } else {
            if (this.props.autoFillOnNotFound) {
              this.setState({
                text: this._renderDescription(rowData),
              })
              delete rowData.isLoading
            }

            if (!this.props.onNotFound) {
              console.warn('google places autocomplete: ' + responseJSON.status)
            } else {
              this.props.onNotFound(responseJSON)
            }
          }
        } else {
          if (!this.props.onFail) {
            console.warn(
              'google places autocomplete: request could not be completed or has been aborted'
            )
          } else {
            this.props.onFail(
              'request could not be completed or has been aborted'
            )
          }
        }
      }

      request.open(
        'GET',
        'https://maps.googleapis.com/maps/api/place/details/json?' +
          Qs.stringify({
            key: this.props.query.key,
            placeid: rowData.place_id,
            language: this.props.query.language,
            ...this.props.GooglePlacesDetailsQuery,
          })
      )

      if (this.props.query.origin !== null) {
        request.setRequestHeader('Referer', this.props.query.origin)
      }

      request.send()
    } else if (rowData.isCurrentLocation === true) {
      this.setState({
        text: this._renderDescription(rowData),
      })

      this.triggerBlur() // hide keyboard but not the results
      delete rowData.isLoading
      this.getCurrentLocation()
    } else {
      this.setState({
        text: this._renderDescription(rowData),
      })

      if (typeof this.props.onBlur !== 'undefined') {
        this.props.onBlur()
      }

      delete rowData.isLoading
      let predefinedPlace = this._getPredefinedPlace(rowData)

      // sending predefinedPlace as details for predefined places
      this.props.onPress(predefinedPlace, predefinedPlace)
    }
  }

  _getPredefinedPlace = rowData => {
    if (rowData.isPredefinedPlace !== true) {
      return rowData
    }

    for (let i = 0; i < this.props.predefinedPlaces.length; i++) {
      if (this.props.predefinedPlaces[i].description === rowData.description) {
        return this.props.predefinedPlaces[i]
      }
    }

    return rowData
  }

  _filterResultsByTypes = (unfilteredResults, types) => {
    if (types.length === 0) return unfilteredResults

    const results = []
    for (let i = 0; i < unfilteredResults.length; i++) {
      let found = false

      for (let j = 0; j < types.length; j++) {
        if (unfilteredResults[i].types.indexOf(types[j]) !== -1) {
          found = true
          break
        }
      }

      if (found === true) {
        results.push(unfilteredResults[i])
      }
    }
    return results
  }

  _requestNearby = (latitude, longitude) => {
    this._abortRequests()

    if (
      latitude !== undefined &&
      longitude !== undefined &&
      latitude !== null &&
      longitude !== null
    ) {
      const request = new XMLHttpRequest()
      this._requests.push(request)
      request.timeout = this.props.timeout
      request.ontimeout = this.props.onTimeout
      request.onreadystatechange = () => {
        if (request.readyState !== 4) {
          return
        }

        if (request.status === 200) {
          const responseJSON = JSON.parse(request.responseText)

          if (typeof responseJSON.results !== 'undefined') {
            if (this._isMounted === true) {
              var results = []
              if (this.props.nearbyPlacesAPI === 'GoogleReverseGeocoding') {
                results = this._filterResultsByTypes(
                  responseJSON.results,
                  this.props.filterReverseGeocodingByTypes
                )
              } else {
                results = responseJSON.results
              }

              this.setState({
                dataSource: this.buildRowsFromResults(results),
              })
            }
          }
          if (typeof responseJSON.error_message !== 'undefined') {
            if (!this.props.onFail)
              console.warn(
                'google places autocomplete: ' + responseJSON.error_message
              )
            else {
              this.props.onFail(responseJSON.error_message)
            }
          }
        } else {
          // console.warn("google places autocomplete: request could not be completed or has been aborted");
        }
      }

      let url = ''
      if (this.props.nearbyPlacesAPI === 'GoogleReverseGeocoding') {
        // your key must be allowed to use Google Maps Geocoding API
        url =
          'https://maps.googleapis.com/maps/api/geocode/json?' +
          Qs.stringify({
            latlng: latitude + ',' + longitude,
            key: this.props.query.key,
            ...this.props.GoogleReverseGeocodingQuery,
          })
      } else {
        url =
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
          Qs.stringify({
            location: latitude + ',' + longitude,
            key: this.props.query.key,
            ...this.props.GooglePlacesSearchQuery,
          })
      }

      request.open('GET', url)
      if (this.props.query.origin !== null) {
        request.setRequestHeader('Referer', this.props.query.origin)
      }

      request.send()
    } else {
      this._results = []
      this.setState({
        dataSource: this.buildRowsFromResults([]),
      })
    }
  }

  _request = text => {
    this._abortRequests()

    if (text.length >= this.props.minLength) {
      const request = new XMLHttpRequest()
      this._requests.push(request)
      request.timeout = this.props.timeout
      request.ontimeout = this.props.onTimeout
      request.onreadystatechange = () => {
        if (request.readyState !== 4) {
          return
        }

        if (request.status === 200) {
          const responseJSON = JSON.parse(request.responseText)
          if (typeof responseJSON.predictions !== 'undefined') {
            if (this._isMounted === true) {
              const results =
                this.props.nearbyPlacesAPI === 'GoogleReverseGeocoding'
                  ? this._filterResultsByTypes(
                      responseJSON.predictions,
                      this.props.filterReverseGeocodingByTypes
                    )
                  : responseJSON.predictions

              this._results = results
              this.setState({
                dataSource: this.buildRowsFromResults(results),
                listViewDisplayed: true,
              })
            }
          }
          if (typeof responseJSON.error_message !== 'undefined') {
            if (!this.props.onFail)
              console.warn(
                'google places autocomplete: ' + responseJSON.error_message
              )
            else {
              this.props.onFail(responseJSON.error_message)
            }
          }
        } else {
          // console.warn("google places autocomplete: request could not be completed or has been aborted");
        }
      }
      if (this.props.preProcess) {
        text = this.props.preProcess(text)
      }
      request.open(
        'GET',
        'https://maps.googleapis.com/maps/api/place/autocomplete/json?&input=' +
          encodeURIComponent(text) +
          '&' +
          Qs.stringify(this.props.query)
      )
      if (this.props.query.origin !== null) {
        request.setRequestHeader('Referer', this.props.query.origin)
      }

      request.send()
    } else {
      this._results = []
      this.setState({
        dataSource: this.buildRowsFromResults([]),
      })
    }
  }

  clearText() {
    this.setState({
      text: '',
    })
  }

  _handleChangeText = text => {
    if (this.props.onChangeText) {
      this.props.onChangeText(text)
    }
  }

  _renderRowData = rowData => {
    if (this.props.renderRow) {
      return this.props.renderRow(rowData)
    }

    return (
      <Text
        style={[
          this.props.suppressDefaultStyles ? {} : defaultStyles.description,
          this.props.styles.description,
          rowData.isPredefinedPlace
            ? this.props.styles.predefinedPlacesDescription
            : {},
        ]}
        numberOfLines={this.props.numberOfLines}
      >
        {this._renderDescription(rowData)}
      </Text>
    )
  }

  _renderDescription = rowData => {
    if (this.props.renderDescription) {
      return this.props.renderDescription(rowData)
    }

    return rowData.description || rowData.formatted_address || rowData.name
  }

  _renderRow = (rowData = {}, sectionID, rowID) => {
    return (
      <ScrollView
        style={{ flex: 1 }}
        scrollEnabled={this.props.isRowScrollable}
        keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableHighlight
          style={{ width: WINDOW.width }}
          onPress={() => this._onPress(rowData)}
          underlayColor={this.props.listUnderlayColor || '#c8c7cc'}
        >
          <View
            style={[
              this.props.suppressDefaultStyles ? {} : defaultStyles.row,
              this.props.styles.row,
              rowData.isPredefinedPlace ? this.props.styles.specialItemRow : {},
            ]}
          >
            {this._renderRowData(rowData)}
          </View>
        </TouchableHighlight>
      </ScrollView>
    )
  }

  _renderSeparator = (sectionID, rowID) => {
    if (rowID == this.state.dataSource.length - 1) {
      return null
    }

    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={[
          this.props.suppressDefaultStyles ? {} : defaultStyles.separator,
          this.props.styles.separator,
        ]}
      />
    )
  }

  _onBlur = () => {
    this.triggerBlur()

    this.setState({
      listViewDisplayed: false,
    })
  }

  _onFocus = () => this.setState({ listViewDisplayed: true })

  _getFlatList = () => {
    const keyGenerator = () =>
      Math.random()
        .toString(36)
        .substr(2, 10)

    if (
      (this.state.text !== '' ||
        this.props.predefinedPlaces.length ||
        this.props.currentLocation === true) &&
      this.state.listViewDisplayed === true
    ) {
      return (
        <FlatList
          scrollEnabled={!this.props.disableScroll}
          style={defaultStyles.listView}
          data={this.state.dataSource}
          keyExtractor={keyGenerator}
          extraData={[this.state.dataSource, this.props]}
          ItemSeparatorComponent={this._renderSeparator}
          renderItem={({ item }) => this._renderRow(item)}
          {...this.props}
        />
      )
    }

    return null
  }

  render() {
    let {
      clearButtonMode,
      onFocus,
      onBlur,
      value,
      label,
      editable,
      returnKeyType,
      keyboardAppearance,
      placeholder,
      onSubmitEditing,
      placeholderTextColor,
      underlineColorAndroid,
      onChangeText,
    } = this.props

    return (
      <View
        style={[
          this.props.suppressDefaultStyles ? {} : defaultStyles.container,
          this.props.styles.container,
        ]}
        pointerEvents="box-none"
      >
        <Input
          ref="textInput"
          label={label}
          editable={editable}
          returnKeyType={returnKeyType}
          keyboardAppearance={keyboardAppearance}
          value={value}
          placeholder={placeholder}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={placeholderTextColor}
          onFocus={onFocus}
          onBlur={onBlur}
          underlineColorAndroid={underlineColorAndroid}
          clearButtonMode="while-editing"
          style={{
            zIndex: 10,
          }}
          onChangeText={onChangeText}
        />
        {this._getFlatList()}
        {this.props.children}
      </View>
    )
  }
}

GooglePlacesAutocomplete.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  returnKeyType: PropTypes.string,
  keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),
  onPress: PropTypes.func,
  onNotFound: PropTypes.func,
  onFail: PropTypes.func,
  minLength: PropTypes.number,
  fetchDetails: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoFillOnNotFound: PropTypes.bool,
  getDefaultValue: PropTypes.func,
  timeout: PropTypes.number,
  onTimeout: PropTypes.func,
  query: PropTypes.object,
  GoogleReverseGeocodingQuery: PropTypes.object,
  GooglePlacesSearchQuery: PropTypes.object,
  GooglePlacesDetailsQuery: PropTypes.object,
  styles: PropTypes.object,
  textInputProps: PropTypes.object,
  predefinedPlaces: PropTypes.array,
  currentLocation: PropTypes.bool,
  currentLocationLabel: PropTypes.string,
  nearbyPlacesAPI: PropTypes.string,
  enableHighAccuracyLocation: PropTypes.bool,
  filterReverseGeocodingByTypes: PropTypes.array,
  predefinedPlacesAlwaysVisible: PropTypes.bool,
  enableEmptySections: PropTypes.bool,
  renderDescription: PropTypes.func,
  renderRow: PropTypes.func,
  renderLeftButton: PropTypes.func,
  renderRightButton: PropTypes.func,
  listUnderlayColor: PropTypes.string,
  debounce: PropTypes.number,
  isRowScrollable: PropTypes.bool,
  text: PropTypes.string,
  textInputHide: PropTypes.bool,
  suppressDefaultStyles: PropTypes.bool,
  numberOfLines: PropTypes.number,
  onSubmitEditing: PropTypes.func,
  editable: PropTypes.bool,
}
GooglePlacesAutocomplete.defaultProps = {
  placeholder: 'Search',
  placeholderTextColor: '#A8A8A8',
  isRowScrollable: true,
  underlineColorAndroid: 'transparent',
  returnKeyType: 'default',
  keyboardAppearance: 'default',
  onPress: () => {},
  onNotFound: () => {},
  onFail: () => {},
  minLength: 0,
  fetchDetails: false,
  autoFocus: false,
  autoFillOnNotFound: false,
  keyboardShouldPersistTaps: 'always',
  timeout: 20000,
  onTimeout: () => console.warn('google places autocomplete: request timeout'),
  query: {
    key: 'missing api key',
    language: 'en',
    types: 'geocode',
  },
  GoogleReverseGeocodingQuery: {},
  GooglePlacesDetailsQuery: {},
  GooglePlacesSearchQuery: {
    rankby: 'distance',
    type: 'restaurant',
  },
  styles: {},
  textInputProps: {},
  predefinedPlaces: [],
  currentLocation: false,
  currentLocationLabel: 'Current location',
  nearbyPlacesAPI: 'GooglePlacesSearch',
  enableHighAccuracyLocation: true,
  filterReverseGeocodingByTypes: [],
  predefinedPlacesAlwaysVisible: false,
  enableEmptySections: true,
  listViewDisplayed: 'auto',
  debounce: 0,
  textInputHide: false,
  suppressDefaultStyles: false,
  numberOfLines: 1,
  onSubmitEditing: () => {},
  editable: true,
}

export default GooglePlacesAutocomplete
