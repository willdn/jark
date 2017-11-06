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

/**
 * Get account details
 * @param {string} - Address to get details
 * @return {Promise<Response>} Account details
 */
export const getAccount = (address) => {
  return axios.get(`${getEndpoint()}/api/accounts?address=${address}`)
  .then((res) => {
    return res.account
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Get transaction list
 * @param {string} - Address to get transactions from
 * @return {Promise<Response>} Transactions
 */
export const getTransactions = (address) => {
  return axios.get(`${getEndpoint()}/api/transactions?recipientId=${address}&senderId=${address}`)
  .then((res) => {
    return res.data.transactions
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}
