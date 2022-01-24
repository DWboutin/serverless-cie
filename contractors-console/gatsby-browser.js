import React from 'react'

import { WithStyle, WithRoofingStyle, googleScriptCallbackInit } from 'conecto-ui-components'

import { WithIntl } from './src/i18n'
import WithAuthPage from './src/_helpers/WithAuthPage'
import AmplifyConfigs from './src/_helpers/AmplifyConfigs'
import FirebaseInit from './src/_helpers/FirebaseInit'

import './src/_styles/styles.scss'

googleScriptCallbackInit()
WithStyle()
WithRoofingStyle()

const noAuthPages = [
  '',
  '404',
  'sign-up',
  'password-reset',
  'confirmation',
  `${process.env.SECOND_LANGUAGE}`,
  `${process.env.SECOND_LANGUAGE}/404`,
  `${process.env.SECOND_LANGUAGE}/sign-up`,
  `${process.env.SECOND_LANGUAGE}/password-reset`,
  `${process.env.SECOND_LANGUAGE}/confirmation`,
]

const authInitializr = (cb) => {
  AmplifyConfigs()
  const messaging = FirebaseInit()
  cb(messaging)
}

export const wrapPageElement = ({ element, props }) => {
  if (noAuthPages.indexOf(props['*']) === -1 && typeof props.pageContext.originalPath !== 'undefined') {
    return (
      <WithAuthPage initializer={authInitializr} redirectTo="/" {...props}>
        {element}
      </WithAuthPage>
    )
  } else {
    return <WithIntl {...props}>{element}</WithIntl>
  }
}

export const onClientEntry = () => {
  // navigator.serviceWorker
  //   .register('/firebase-messaging-sw.js')
    // .then((registration) => {
    //   const messaging = firebase.messaging()
    //   messaging.useServiceWorker(registration);
    //   messaging.usePublicVapidKey("BJSprvtzn6Zfm2ZniHp2oK1CXclkp9iMtz4lUxMKjNbPGsK-9eLzE2r7M2PSCS1mLXC8ajsJXFl07yPxvftW1Tc");
    // });
}