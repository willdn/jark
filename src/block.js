import { query } from './api'

/**
 * Get last blocks
 * @return {Promise<Response>} Last blocks array
 */
export const getBlocks = () => {
  return query(`api/blocks`)
  .then((res) => {
    return res.blocks
  })
}

/**
 * Get block from blockId
 * @param {string} - Block id
 * @return {Promise<Response>} Block details
 */
export const getBlock = (blockId) => {
  return query(`api/blocks/get`, {
    id: blockId
  })
  .then((res) => {
    return res.block
  })
}

/**
 * Get blockchain height
 * @return {Promise<Response>} Block height
 */
export const getBlocksHeight = () => {
  return query(`api/blocks/getHeight`)
  .then((res) => {
    return res.height
  })
}

/**
 * Get blockchain transaction fee
 * @return {Promise<Response>} Transaction fee
 */
export const getBlockchainFee = () => {
  return query(`api/blocks/getFee`)
  .then((res) => {
    return res.fee
  })
}
