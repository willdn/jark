import axios from 'axios'
import ark from 'arkjs'

export const networksType = {
  MAIN: {
    label: 'Main',
    version: 0x17
  },
  DEV: {
    label: 'Dev',
    version: 0x1e
  }
}

export const arkjs = ark
let currentNetwork = networksType.MAIN

/**
 */
export const init = (netowrk) => {
  setNetwork(netowrk)
}

/**
 * Query API
 * @return {Promise<Response>} Query result
 */
export const query = (url, params) => {
  return axios.get(`${getEndpoint()}/${url}`, {
    params: params
  })
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Return API endpoint
 * @return {string} Endpoint
 */
export const getEndpoint = () => {
  return 'https://dev.arkcoin.net'
  // if (store.getters.networkType.label === 'Test') return 'https://dev.arkcoin.net'
}

/**
 * Get network
 * @return {Promise<Response>} Query resylt
 */
export const getNetwork = () => {
  return currentNetwork
}

/**
 * Set network
 * @param {string} - Network name to use
 * @return {Promise<Response>} Query resylt
 */
export const setNetwork = (netowrk) => {
  if (netowrk === networksType.DEV.label) {
    currentNetwork = networksType.DEV
    arkjs.crypto.setNetworkVersion(networksType.DEV.version)
    return
  } else if (netowrk === networksType.MAIN.label) {
    currentNetwork = networksType.MAIN
    arkjs.crypto.setNetworkVersion(networksType.MAIN.version)
  }
}
