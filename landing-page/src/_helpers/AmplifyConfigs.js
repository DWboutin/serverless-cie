import API from '@aws-amplify/api'

export default () => {
  API.configure({
    API: {
      endpoints: [
        {
          name: 'roofing',
          endpoint: process.env.API_GATEWAY_URL,
          region: process.env.API_GATEWAY_REGION,
        },
      ],
    },
  })
}
