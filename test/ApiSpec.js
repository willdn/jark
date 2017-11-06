import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {

  describe('api.getEndpoint()', () => {
    it('should return api endpoint', () => {
      const endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://dev.arkcoin.net')
    })
  })

  describe('api.init()', () => {
    it('should be Mainnet by default', () => {
      expect(api.getNetwork().label).to.be.equal('Main')
    })
    it('should init api and set network to dev', () => {
      api.init('Dev')
      expect(api.getNetwork().label).to.be.equal('Dev')
    })
  })

  describe('api.setNetwork()', () => {
    it('should be Mainnet by default', () => {
      api.setNetwork('Main')
      expect(api.getNetwork().label).to.be.equal('Main')
    })
  })
})
