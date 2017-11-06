import axios from 'axios'
// import arkjs from 'arkjs'
import { getEndpoint, arkjs, setNetwork } from './api'

/**
 * Get transactions list
 * @return {Promise<Response>} Transactions list
 */
export const getTransactionsList = () => {
  return axios.get(`${getEndpoint()}/api/transactions`)
  .then((res) => {
    return res.data.transactions
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Get transaction by tx id
 * @param {string} - Transaction id
 * @return {Promise<Response>} Transaction details
 */
export const getTransaction = (txid) => {
  return axios.get(`${getEndpoint()}/api/transactions/get?id=${txid}`)
  .then((res) => {
    return res.data.transaction
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Create a transaction
 * @param {Object} - Transaction parameters
 * @return {Object} Transaction
 */
export const createTransaction = (data) => {
  let amount = data.amount * Math.pow(10, 8)
  setNetwork('Dev')
  return arkjs.transaction.createTransaction(
    data.to,
    amount,
    data.message,
    data.passphrase,
    data.secondPassphrase
  )
}
