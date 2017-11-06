import axios from 'axios'

/**
 * Return API endpoint
 * @return {string} Endpoint
 */
export const getEndpoint = () => {
  return 'https://dev.arkcoin.net'
  // if (store.getters.networkType.label === 'Test') return 'https://dev.arkcoin.net'
}

/**
 * Get node peers
 * @return {Promise<Response>} Array of node peers
 */
export const getPeers = () => {
  return axios.get(`${getEndpoint()}/api/peers`)
  .then((res) => {
    return res.data.peers
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Get blockchain height
 * @return {Promise<Response>} Block height
 */
export const getBlocksHeight = () => {
  return axios.get(`${getEndpoint()}/api/blocks/getHeight`)
  .then((res) => {
    return res.data.height
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Get blockchain transaction fee
 * @return {Promise<Response>} Transaction fee
 */
export const getBlockchainFee = () => {
  return axios.get(`${getEndpoint()}/api/blocks/getFee`)
  .then((res) => {
    return res.data.fee
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}
