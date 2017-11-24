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
    it('network should remain the same no arguments', () => {
      api.setNetwork()
      expect(api.getNetwork().label).to.be.equal('Dev')
    })
    it('network should remain the same wrong arguments', () => {
      api.setNetwork('Network?')
      expect(api.getNetwork().label).to.be.equal('Dev')
    })
    it('should set a particular endpoint Dev', () => {
      api.setNetwork('Dev', '37.59.70.165')
      expect(api.getEndpoint()).to.be.equal('http://37.59.70.165:4002')
    })
    it('should set a particular endpoint Main', () => {
      api.setNetwork('Main', '37.59.70.165')
      expect(api.getEndpoint()).to.be.equal('http://37.59.70.165:4001')
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

  describe('api.getKeys()', () => {
    it('should return keys for main net', () => {
      api.setNetwork('Main')
      const keys = api.getKeys()
      expect(keys.publicKey.length).to.be.equal(66)
      expect(keys.privateKey.length).to.be.equal(64)
      expect(keys.passphrase).to.be.a('string')
      expect(keys.address.charAt(0)).to.be.equal('A')
    })
    it('should return keys for dev net', () => {
      api.setNetwork('Dev')
      const keys = api.getKeys()
      expect(keys.publicKey.length).to.be.equal(66)
      expect(keys.privateKey.length).to.be.equal(64)
      expect(keys.passphrase).to.be.a('string')
      expect(keys.address.charAt(0)).to.be.equal('D')
    })
    it('should return keys for given passphrase', () => {
      api.setNetwork('Dev')
      const keys = api.getKeys('slogan plug release deny solar seed inject tag light winner box oyster')
      expect(keys.address).to.be.equal('D7VSQMHvcf3j6o6LxEeAnazYYbVyeTJw4v')
      expect(keys.publicKey).to.be.equal('02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a')
      expect(keys.privateKey).to.be.equal('73079e6c1ebce0c37cf824ee4132a7c2d6a3340cd80eea1aa23b566911b42005')
    })
  })

  describe('api.getSecondSignatureFee()', () => {
    it('should return fee for 2nd signature', () => {
      api.getSecondSignatureFee()
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
