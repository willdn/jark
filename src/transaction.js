import { query, post, arkjs } from './api'

/**
 * Get transactions list
 * @return {Promise<Response>} Transactions list
 */
export const getTransactionsList = () => {
  return query(`api/transactions`)
  .then((res) => {
    return res.transactions
  })
}

/**
 * Get transaction by tx id
 * @param {string} - Transaction id
 * @return {Promise<Response>} Transaction details
 */
export const getTransactionById = (txid) => {
  return query(`api/transactions/get`, {
    id: txid
  })
  .then((res) => {
    return res.transaction
  })
}

/**
 * Create a transaction
 * @param {Object} - Transaction parameters
 * @return {Object} Transaction
 */
export const createTransaction = (data) => {
  let amount = data.amount * Math.pow(10, 8)
  return arkjs.transaction.createTransaction(
    data.to,
    amount,
    data.message,
    data.passphrase,
    data.secondPassphrase
  )
}

/**
 * Submit transaction to network
 * @param {Object} - Transaction details
 * @return {Promise<Response>} RPC response from sending transaction
 */
export const sendTransaction = (tx) => {
  return post(`peer/transactions`, tx)
  .then((res) => {
    return res
  })
}
