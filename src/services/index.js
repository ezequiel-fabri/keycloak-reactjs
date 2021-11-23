import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json")

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: "login-required",
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then(onAuthenticatedCallback)
}

_kc.onAuthSuccess = () => {
  console.log(_kc.tokenParsed)
}

const login = _kc.login
const logout = _kc.logout

const getToken = () => _kc.token
const isLoggedIn = () => !!_kc.token

const getUsername = () => _kc.tokenParsed?.preferred_username

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role))

const updateToken = (successCallback) => {
  _kc.updateToken(5)
    .then(successCallback)
    .catch(login)
}


export const userService = {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
}