import { expect } from 'chai'
import * as api from '../src'

describe('Blocks', () => {

  describe('api.getBlocksHeight()', () => {
    it('should return block height', () => {
      return api.getBlocksHeight()
        .then((res) => {
          expect(res).to.be.a('number')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getBlockchainFee()', () => {
    it('should return block fee', () => {
      return api.getBlockchainFee()
        .then((res) => {
          expect(res).to.be.a('number')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getBlocks()', () => {
    it('should return an array of blocks', () => {
      return api.getBlocks()
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    }).timeout(5000)
  })

  describe('api.getBlock()', () => {
    it('should return block details', () => {
      return api.getBlock('17844527613892523347')
        .then((res) => {
          expect(res).to.be.an('object')
          expect(res.height).to.be.equal(1723830)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    }).timeout(5000)
  })
})
