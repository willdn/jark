import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {

  describe('api.init()', () => {
    it('should be Mainnet by default', () => {
      api.init()
      expect(api.getNetwork().label).to.be.equal('Main')
    })
    it('should init api and set network to dev', () => {
      api.init('Dev')
      expect(api.getNetwork().label).to.be.equal('Dev')
    })
  })

  describe('api.setNetwork()', () => {
    it('should set network to main', () => {
      api.setNetwork('Main')
      expect(api.getNetwork().label).to.be.equal('Main')
    })
  })
})
