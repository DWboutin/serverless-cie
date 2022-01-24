import React from 'react'
import * as Font from 'expo-font'
import { KeyboardAvoidingView, StatusBar } from 'react-native'
import { useScreens } from 'react-native-screens'

import WithLocaleContext from './src/contexts/LocaleContext'
import AuthContext from './src/contexts/AuthContext'
import NavigatorContext from './src/contexts/NavigatorContext'
import NotificationContext from './src/contexts/NotificationContext'

import AmplifyConfigs from './src/helpers/AmplifyConfigs'

AmplifyConfigs()
useScreens()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
    }

    this.navigator = React.createRef()

    this.handleStateChange = this.handleStateChange.bind(this)
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  async componentDidMount() {
    const fontsPromises = [
      Font.loadAsync({
        'sailec-regular': require('./assets/fonts/Sailec-Regular.ttf'),
      }),
      Font.loadAsync({
        'styrene-a-regular': require('./assets/fonts/StyreneA-Regular.ttf'),
        'styrene-a-medium': require('./assets/fonts/StyreneA-Medium.ttf'),
      }),
      Font.loadAsync({
        'gt-pressura': require('./assets/fonts/GTPressura-Bold.ttf'),
      }),
    ]

    await Promise.all(fontsPromises)

    this.setState({
      fontLoaded: true,
    })
  }

  handleStateChange(authState) {
    this.setState({
      authState,
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior="padding"
        enabled
      >
        <WithLocaleContext>
          <NotificationContext>
            <AuthContext
              navigator={this.navigator}
              fontLoaded={this.state.fontLoaded}
              noAuthRoute="SignIn"
              authRoute="SignedIn"
            >
              <StatusBar barStyle="dark-content" />
              <NavigatorContext ref={this.navigator} />
            </AuthContext>
          </NotificationContext>
        </WithLocaleContext>
      </KeyboardAvoidingView>
    )
  }
}

export default App
