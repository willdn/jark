import { query, queryBuilder } from './api'

/**
 * Return delegates list
 * @return {Promise<Response>} Array of delegates
 */
export const getDelegates = (options) => {
  const params = queryBuilder(options)
  return query(`api/delegates?${params}`)
  .then((res) => {
    return res.delegates
  })
}

/**
 * Return delegates infos by username
 * @param {string} - Delegate username
 * @return {Promise<Response>} Delegate infos
 */
export const getDelegateByUsername = (username) => {
  return query(`api/delegates/get`, {
    username: username
  })
  .then((res) => {
    return res.delegate
  })
}

/**
 * Return delegates infos by public key
 * @param {string} - Delegate public key
 * @return {Promise<Response>} Delegate infos
 */
export const getDelegateByPublicKey = (publicKey) => {
  return query(`api/delegates/get`, {
    publicKey: publicKey
  })
  .then((res) => {
    return res.delegate
  })
}

/**
 * Return next forgers delegates list
 * @return {Promise<Response>} Delegates list
 */
export const getNextForgers = () => {
  return query(`api/delegates/getNextForgers`)
  .then((res) => {
    return res.delegates
  })
}

/**
 * Return voters list from delegate public key
 * @param {string} - Delegate public key
 * @return {Promise<Response>} Voters list
 */
export const getDelegateVoters = (publicKey) => {
  return query(`api/delegates/voters`, {
    publicKey: publicKey
  })
  .then((res) => {
    return res.accounts
  })
}

/**
 * Return delegates matching query
 * @param {string} q - Search query
 * @param {Object} options - Search params
 * @return {Promise<Response>} Array of delegates
 */
export const searchDelegate = (q, options) => {
  const params = queryBuilder(options)
  return query(`api/delegates/search?q=${q}&${params}`)
  .then((res) => {
    return res.delegates
  })
}
