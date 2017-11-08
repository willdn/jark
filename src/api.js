import axios from 'axios'
import ark from 'arkjs'
import { getNetHash } from './block'

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
  switch (getNetwork().label) {
    case networksType.MAIN.label: return 'https://node1.arknet.cloud'
    case networksType.DEV.label: return 'https://dev.arkcoin.net'
  }
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
 * @param {string} - Network name to use
 * @return {Promise<Response>} Query resylt
 */
export const setNetwork = (netowrk) => {
  switch(netowrk) {
    case networksType.DEV.label: {
      currentNetwork = networksType.DEV
      arkjs.crypto.setNetworkVersion(networksType.DEV.version)
      return true
    }
    case networksType.MAIN.label : {
      currentNetwork = networksType.MAIN
      arkjs.crypto.setNetworkVersion(networksType.MAIN.version)
      return true
    }
  }
}
