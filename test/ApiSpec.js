import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {

  describe('api.getEndpoint()', () => {
    it('should return api endpoint', () => {
      const endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://dev.arkcoin.net')
    })

  })

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

})
