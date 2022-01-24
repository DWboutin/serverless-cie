import { APIGatewayProxyResult } from 'aws-lambda'
import Factory from '../Interfaces/Factory'
import logger from '../Helpers/logger'

class ErrorFactory implements Factory {
  getErrorStatusCode(errorName: string) {
    switch (errorName) {
      case 'ValidationError':
        return 400
      case 'MissingValueException':
      case 'Error':
        return 500
      default:
        return 500
    }
  }

  build(data: any, origin, options: any = {}): APIGatewayProxyResult {
    let allowedOrigin:any = false
    const ALLOWED_ORIGINS = [
      process.env.CORS_ORIGIN_1,
      process.env.CORS_ORIGIN_2,
      process.env.CORS_ORIGIN_fasttrack,
      process.env.CORS_ORIGIN_local,
      process.env.ROOFING_LANDING_1,
      process.env.ROOFING_LANDING_2,
    ]

    if (ALLOWED_ORIGINS.indexOf(origin) >= 0) {
      allowedOrigin = origin
    } else {
      allowedOrigin = process.env.CORS_ORIGIN_1
    }

    logger(
      'Error Factory',
      'generic',
      'error',
      JSON.stringify({
        error: {
          name: data.name,
          message: data.message,
          data,
        },
      })
    )

    return {
      statusCode: this.getErrorStatusCode(data.name),
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Credentials':
          'withCredentials' in options ? options.withCredentials : false,
        'Access-Control-Allow-Headers':
          'access-control-allow-origin, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin,Accept, Access-Control-Allow-Credentials',
      },
      body: JSON.stringify({
        error: {
          name: data.name,
          message: data.message,
          data,
        },
      }),
    }
  }
}

export default ErrorFactory
