import { query } from './api'

/**
 * Get peers list
 * @return {Promise<Response>} Peers array
 */
export const getPeersList = () => {
  return query(`api/peers`)
  .then((res) => {
    return res.peers
  })
}

/**
 * Get peers list
 * @return {Promise<Response>} Peers array
 */
export const getPeer = (peerInfos) => {
  return query(`api/peers/get`, {
    ip: peerInfos.ip,
    port: peerInfos.port
  })
  .then((res) => {
    return res.peer
  })
}

/**
 * Get peer version
 * @return {Promise<Response>} Peer version
 */
export const getPeerVersion = () => {
  return query(`api/peers/version`)
  .then((res) => {
    return res.version
  })
}