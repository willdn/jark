import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {
  describe('api.setNetwork()', () => {
    it('should set network to main', () => {
      api.setNetwork('Main')
      expect(api.getNetwork().label).to.be.equal('Main')
    })
  })
})
