import { Auth } from 'aws-amplify'

export default async username => {
  try {
    await Auth.confirmSignUp(username, 'fakecode', {
      // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
      forceAliasCreation: false,
    })

    return true
  } catch (e) {
    switch (e.code) {
      case 'UserNotFoundException':
        return false
      case 'NotAuthorizedException':
        return true
      case 'AliasExistsException':
        // Email alias already exists
        return true
      case 'CodeMismatchException':
        return true
      case 'ExpiredCodeException':
        return true
      case 'ResourceNotFoundException':
        return false
      default:
        console.log(e)
        return false
    }
  }
}
