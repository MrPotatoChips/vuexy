// export default {
//   // Endpoints
//   loginEndpoint: '/jwt/login',
//   registerEndpoint: '/jwt/register',
//   refreshEndpoint: '/jwt/refresh-token',
//   logoutEndpoint: '/jwt/logout',

//   // This will be prefixed in authorization header with token
//   // e.g. Authorization: Bearer <token>
//   tokenType: 'Bearer',

//   // Value of this property will be used as key to store JWT token in storage
//   storageTokenKeyName: 'accessToken',
//   storageRefreshTokenKeyName: 'refreshToken',
// }

export default {
  // Endpoints
  loginEndpoint: `/api/auth/login`,
  registerEndpoint: `/api/auth/register`,
  refreshEndpoint: `/api/auth/refresh`,
  logoutEndpoint: `/api/auth/logout`,

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: `Bearer`,

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: `accessToken`,
  storageRefreshTokenKeyName: `refreshToken`,
}
