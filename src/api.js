import axios from 'axios'

/**
 * Return API endpoint
 * @return {string} Endpoint
 */
export const getEndpoint = () => {
  return 'https://node1.arknet.cloud'
  // if (store.getters.networkType.label === 'Test') return 'https://dev.arkcoin.net'
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
