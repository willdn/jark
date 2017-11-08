import { query, queryBuilder } from './api'

/**
 * Get last blocks
 * @return {Promise<Response>} Last blocks array
 */
export const getBlocks = (options) => {
  const params = queryBuilder(options)
  return query(`api/blocks?${params}`)
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

/**
 * Get net hash
 * @return {Promise<Response>} Nethash
 */
export const getNetHash = () => {
  return query(`api/blocks/getNetHash`)
  .then((res) => {
    return res.nethash
  })
}

/**
 * Get blockchain's epoch
 * @return {Promise<Response>} Epoch
 */
export const getEpoch = () => {
  return query(`api/blocks/getEpoch`)
  .then((res) => {
    return res.epoch
  })
}

/**
 * Get block forging reward
 * @return {Promise<Response>} Reward
 */
export const getReward = () => {
  return query(`api/blocks/getReward`)
  .then((res) => {
    return res.reward
  })
}

/**
 * Get supply
 * @return {Promise<Response>} Supply
 */
export const getSupply = () => {
  return query(`api/blocks/getSupply`)
  .then((res) => {
    return res.supply
  })
}

/**
 * Get blockchain status
 * @return {Promise<Response>} Status object
 */
export const getStatus = () => {
  return query(`api/blocks/getStatus`)
  .then((res) => {
    return res
  })
}