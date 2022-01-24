import React from 'react'
import { Text, Linking } from 'react-native'

class HyperLink extends React.Component {
  constructor(props) {
    super(props)

    this.goToURL = this.goToURL.bind(this)
  }

  goToURL() {
    const { url } = this.props

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url)
      } else {
        console.log("Don't know how to open URI: " + this.props.url)
      }
    })
  }

  render() {
    const { style } = this.props

    return (
      <Text style={style} onPress={this.goToURL}>
        {title}
      </Text>
    )
  }
}

export default HyperLink
