import axios from 'axios'
import { getEndpoint } from './api'

/**
 * Get balance from address
 * @param {string} - Address to get balance
 * @return {Promise<Response>} Balance
 */
export const getBalance = (address) => {
  return axios.get(`${getEndpoint()}/api/accounts/getBalance?address=${address}`)
  .then((res) => {
    return res.data.balance / 100000000
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}
