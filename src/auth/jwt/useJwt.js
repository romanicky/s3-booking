// ** Core JWT Import
import useJwt from '@src/@core/auth/jwt/useJwt'

const baseURL = process.env.REACT_APP_API_HOST
const config = {
  loginEndpoint: `${baseURL}auth/signin`,
  registerEndpoint: `${baseURL}auth/signup`,
  refreshEndpoint: `${baseURL}auth/refresh-token`,
  logoutEndpoint: `${baseURL}auth/jwt/logout`,

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}

const { jwt } = useJwt(config)

export default jwt
