import Auth from '@aws-amplify/auth'
import Api from '@aws-amplify/api'

import config from '../../aws-configs'

export default () => {
  Auth.configure({
    mandatorySignIn: true,
    region: config.USER_POOL_REGION,
    userPoolId: config.USER_POOL_ID,
    identityPoolId: config.IDENTITY_POOL_ID,
    userPoolWebClientId: config.USER_POOL_CLIENT_ID,
  })
  Api.configure({
    endpoints: [
      {
        name: 'contractors',
        endpoint: config.API_GATEWAY_URL,
        region: config.API_GATEWAY_REGION,
      },
    ],
  })
}
