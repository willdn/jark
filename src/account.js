import { query } from './api'

/**
 * Get public key from address
 * @param {string} - Address to get public key
 * @return {Promise<Response>} Public key
 */
export const getPublicKey = (address) => {
  return query(`api/accounts/getPublicKey`, {
    address: address
  })
  .then((res) => {
    return res.publicKey
  })
}

/**
 * Get balance from address
 * @param {string} - Address to get balance
 * @return {Promise<Response>} Balance
 */
export const getBalance = (address) => {
  return query(`api/accounts/getBalance`, {
    address: address
  })
  .then((res) => {
    return res.balance / Math.pow(10, 8)
  })
}

/**
 * Get account details
 * @param {string} - Address to get details
 * @return {Promise<Response>} Account details
 */
export const getAccount = (address) => {
  return query(`api/accounts`, {
    address: address
  })
  .then((res) => {
    return res.account
  })
}

/**
 * Get delegates list from address
 * @param {string} - Address to get vote delegates
 * @return {Promise<Response>} Array of delegates
 */
export const getDelegatesFromAddress = (address) => {
  return query(`api/accounts/delegates`, {
    address: address
  })
  .then((res) => {
    return res.delegates
  })
}

/**
 * Get the delegates register fee
 * @return {Promise<Response>} Delegates register fee
 */
export const getDelegatesFee = () => {
  return query(`api/accounts/delegates/fee`)
  .then((res) => {
    return res.fee
  })
}
