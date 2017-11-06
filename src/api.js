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
 * Set network
 * @param {string} - Network name to use
 * @return {Promise<Response>} Query resylt
 */
export const setNetwork = (netowrk) => {
  if (netowrk === networksType.DEV.label) {
    arkjs.crypto.setNetworkVersion(networksType.DEV.version)
    return
  } else if (netowrk === networksType.MAIN.label) {
    arkjs.crypto.setNetworkVersion(networksType.MAIN.version)
  }
}

/**
 * Get node peers
 * @return {Promise<Response>} Array of node peers
 */
export const getPeers = () => {
  return query(`/api/peers`)
  .then((res) => {
    return res.peers
  })
}

/**
 * Get blockchain height
 * @return {Promise<Response>} Block height
 */
export const getBlocksHeight = () => {
  return query(`api/blocks/getHeight`)
  .then((res) => {
    return res.height
  })
}

/**
 * Get blockchain transaction fee
 * @return {Promise<Response>} Transaction fee
 */
export const getBlockchainFee = () => {
  return query(`api/blocks/getFee`)
  .then((res) => {
    return res.fee
  })
}
