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

  describe('api.query()', () => {
    it('should return error when wrong url query', () => {
      api.query('https://dev.arkcoin.net/xxx')
        .then((res) => {
          expect(res).be.an.instanceOf(Error)
          expect(res.message).to.be.equal('Request failed with status code 404')
        })
    })
  })

  describe('api.queryBuilder()', () => {
    it('should return query url when object given', () => {
      const query = api.queryBuilder({
        'orderBy': 'desc',
        'limit': 5
      })
      expect(query).to.be.equal('orderBy=desc&limit=5')
    })
  })

  describe('api.post()', () => {
    it('should return error when wrong url post', () => {
      api.post('https://dev.arkcoin.net/xxx')
        .then((res) => {
          expect(res).be.an.instanceOf(Error)
          expect(res.message).to.be.equal('Request failed with status code 404')
        })
    })
  })
})
