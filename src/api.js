import axios from 'axios'
import ark from 'arkjs'
import Mnemonic from 'bitcore-mnemonic'
import { getNetHash } from './block'
import seeds from './seeds'

export const networksType = {
  MAIN: {
    label: 'Main',
    version: 0x17,
    port: 4001
  },
  DEV: {
    label: 'Dev',
    version: 0x1e,
    port: 4002
  }
}

export const arkjs = ark
let currentNetwork = networksType.MAIN
let endpoint = seeds.MAIN[0]

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
    return err
  })
}

/**
 * Post to API
 * @return {Promise<Response>} Post result
 */
export const post = (url, data) => {
  return getNetHash()
    .then((nethash) => {
      const dataReq = JSON.stringify({ transactions: [data] })
      return axios.post(`${getEndpoint()}/${url}`, dataReq, {
        headers: {
          'Content-Type': 'application/json',
          'version': '0.3.0',
          'port': 1,
          'nethash': nethash
        }
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        return err
      })
    })
}

/**
 * Return API endpoint
 * @return {string} Endpoint
 */
export const getEndpoint = () => {
  return endpoint
}

/**
 * Get network
 * @return {Object} Current network
 */
export const getNetwork = () => {
  return currentNetwork
}

/**
 * Set network
 * @param {string} netowrk - Network name to use
 * @param {string} url - Set a custom API endpoint
 */
export const setNetwork = (netowrk, url = null) => {
  if (netowrk != null) netowrk = formatNetworkType(netowrk)
  switch(netowrk) {
    case networksType.DEV.label: {
      currentNetwork = networksType.DEV
      arkjs.crypto.setNetworkVersion(networksType.DEV.version)
      endpoint = seeds.DEV[0]
    } break
    case networksType.MAIN.label : {
      currentNetwork = networksType.MAIN
      arkjs.crypto.setNetworkVersion(networksType.MAIN.version)
      endpoint = seeds.MAIN[0]
    } break
  }
  if (url != null) {
    if (!url.startsWith('http')) url = `http://${url}`
    endpoint = `${url}:${getNetwork().port}`
  }
}

/**
 * Get seeds
 * @return {Object} Seeds list
 */
export const getSeeds = (network = null) => {
  return seeds
}

/**
 * Build url query from object
 * @param {Object} - Query params
 * @return {Promise<Response>} URL param query
 */
export const queryBuilder = (data) => {
  if (data == null || Object.keys(data).length === 0) return ''
  return Object.keys(data).map((key) => {
    return [key, data[key]].map(encodeURIComponent).join("=")
  }).join("&")
}

/**
 * Generate a public / private key pair from random mnemonic
 * @param {string} [passphrase] - Passphrase to get keys from
 * @return {Object} Private/public key pair
 */
export const getKeys = (passphrase = null) => {
  // Get keys from passphrase if present or generate a random one
  let code = (passphrase == null) ? new Mnemonic() : passphrase
  const keys = arkjs.crypto.getKeys(code.toString())
  const address = arkjs.crypto.getAddress(keys.publicKey)
  return {
    publicKey: keys.publicKey,
    privateKey: keys.d.toBuffer().toString('hex'),
    passphrase: code.toString(),
    address: address
  }
}

/**
 * Format network type
 * @param {string} network - Network type
 * @return {string} Formatted network type
 */
const formatNetworkType = (network) => {
  return network.charAt(0).toUpperCase() + network.slice(1)
}

/**
 * Get the second signature fee
 * @return {Promise<Response>} Fee
 */
export const getSecondSignatureFee = () => {
  return query(`api/signatures/fee`)
  .then((res) => {
    return res.fee
  })
}
