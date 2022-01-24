import React from 'react'
import _ from 'lodash'

class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.map = null
    this.centerMarker = null
    this.rangeCircle = null
    this.ggmap = React.createRef()

    this.defaultCenter = {
      lat: 46.81332219999999,
      lng: -71.22411439999996,
    }
  }

  componentDidMount() {
    const { center, radius } = this.props

    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      this.map = new window.google.maps.Map(this.ggmap.current, {
        zoom: 10,
        center: center || this.defaultCenter,
        mapTypeId: 'terrain',
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: true,
        fullscreenControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP,
        },
      })

      this.centerMarker = new window.google.maps.Marker({
        position: center || this.defaultCenter,
        map: this.map,
        title: 'Hello World!',
      })

      this.rangeCircle = new window.google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: this.map,
        center: center || this.defaultCenter,
        radius: radius * 1000,
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.center, this.props.center)) {
      let mapCenter = this.props.center

      if (mapCenter === null) {
        mapCenter = this.defaultCenter
      }

      this.centerMarker.setPosition(mapCenter)
      this.rangeCircle.setCenter(mapCenter)
      this.map.panTo(mapCenter)
    }

    if (prevProps.radius !== this.props.radius) {
      this.rangeCircle.setRadius(this.props.radius * 1000)
    }
  }

  render() {
    return (
      <div
        id="ggmap"
        ref={this.ggmap}
        style={{
          width: '100%',
          height: '200px',
        }}
      />
    )
  }
}

export default GoogleMap
