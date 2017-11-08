import { query, post, arkjs, queryBuilder } from './api'

/**
 * Get an array of the last transactions on the network
 * @return {Promise<Response>} Transactions array
 */
export const getTransactions = (options) => {
  const params = queryBuilder(options)
  return query(`api/transactions?${params}`)
  .then((res) => {
    return res.transactions
  })
}

/**
 * Get transaction list
 * @param {string} - Address to get transactions from
 * @return {Promise<Response>} Transactions
 */
export const getTransactionsFromAddress = (address) => {
  return query(`api/transactions`, {
    recipientId: address,
    senderId: address
  })
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

/**
 * Get an array of unconfirmed transactions on the network
 * @return {Promise<Response>} Unconfirmed txs array
 */
export const getUnconfirmedTransactions = () => {
  return query(`api/transactions/unconfirmed`)
  .then((res) => {
    return res.transactions
  })
}
