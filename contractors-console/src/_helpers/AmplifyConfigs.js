import Amplify from 'aws-amplify'

export default () => {
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: process.env.USER_POOL_REGION,
      userPoolId: process.env.USER_POOL_ID,
      identityPoolId: process.env.IDENTITY_POOL_ID,
      userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    },
    API: {
      endpoints: [
        {
          name: 'contractors',
          endpoint: process.env.API_GATEWAY_URL,
          region: process.env.API_GATEWAY_REGION,
        },
      ],
    },
  })
}
