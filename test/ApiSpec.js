import { expect } from 'chai'
import * as api from '../src'

describe('API', () => {

  describe('api.getEndpoint()', () => {
    it('should return api endpoint', () => {
      const endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://dev.arkcoin.net')
    })

  })
  
})
