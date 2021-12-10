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
    .catch(_kc.logout)
}

const logout = _kc.logout
const login = options => _kc.login(options)
const register = options => _kc.register(options)

const getToken = () => _kc.token
const isLoggedIn = () => !!_kc.token
const getUid = () => _kc.tokenParsed?.sub

const getUsername = () => _kc.tokenParsed?.preferred_username

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role))

const updateToken = (successCallback) => {
  _kc.updateToken(5)
    .then(successCallback)
    .catch(login)
}

const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value)
}

const removeLocalStorage = (key) => {
  return localStorage.removeItem(key)
}

export const userService = {
  initKeycloak,
  login,
  logout,
  register,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getUid
}