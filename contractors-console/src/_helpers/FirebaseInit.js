import firebase from 'firebase/app'
import 'firebase/messaging'

export default () => {
  let messaging = null
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: 'dev-conecto.firebaseapp.com',
    databaseURL: 'https://dev-conecto.firebaseio.com',
    projectId: 'dev-conecto',
    storageBucket: 'dev-conecto.appspot.com',
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: '1:217419280180:web:df05237c5f5b4044',
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging()

    // Don't know yet what's usePublicVapidKey do, but it works without it
    // messaging.usePublicVapidKey(
    //   'BJSprvtzn6Zfm2ZniHp2oK1CXclkp9iMtz4lUxMKjNbPGsK-9eLzE2r7M2PSCS1mLXC8ajsJXFl07yPxvftW1Tc'
    // )
  }

  return messaging
}
