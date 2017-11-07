import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {
  describe('api.setNetwork()', () => {
    it('should set network to main', () => {
      api.setNetwork('Main')
      expect(api.getNetwork().label).to.be.equal('Main')
    })
    it('should set network to dev', () => {
      api.setNetwork('Dev')
      expect(api.getNetwork().label).to.be.equal('Dev')
    })
  })

  describe('api.getEndpoint()', () => {
    it('should return endpoint', () => {
      api.setNetwork('Main')
      let endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://node1.arknet.cloud')
      api.setNetwork('Dev')
      endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://dev.arkcoin.net')
    })
  })
})
