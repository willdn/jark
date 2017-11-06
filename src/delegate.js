import axios from 'axios'
import { getEndpoint } from './api'

/**
 * Return delegates list
 * @return {Promise<Response>} Array of delegates
 */
export const getDelegates = () => {
  return axios.get(`${getEndpoint()}/api/delegates`)
  .then((res) => {
    return res.data.delegates
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Return delegates infos by username
 * @param {string} - Delegate username
 * @return {Promise<Response>} Delegate infos
 */
export const getByUsername = (username) => {
  return axios.get(`${getEndpoint()}/api/delegates/get?username=${username}`)
  .then((res) => {
    return res.data.delegate
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Return delegates infos by public key
 * @param {string} - Delegate public key
 * @return {Promise<Response>} Delegate infos
 */
export const getByPublicKey = (publicKey) => {
  return axios.get(`${getEndpoint()}/api/delegates/get?publicKey=${publicKey}`)
  .then((res) => {
    return res.data.delegate
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Return next forgers delegates list
 * @return {Promise<Response>} Delegates list
 */
export const getNextForgers = () => {
  return axios.get(`${getEndpoint()}/api/delegates/getNextForgers`)
  .then((res) => {
    return res.data.delegates
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Return voters list from delegeates
 * @param {string} - Delegate public key
 * @return {Promise<Response>} Voters list
 */
export const getDelegateVoters = (publicKey) => {
  return axios.get(`${getEndpoint()}/api/delegates/voters?publicKey=${publicKey}`)
  .then((res) => {
    return res.data.accounts
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}
