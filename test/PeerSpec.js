import { expect } from 'chai'
import * as api from '../src'

describe('Peer', () => {

  describe('api.getPeersList()', () => {
    it('should return peers array', () => {
      return api.getPeersList()
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getPeer()', () => {
    it('should return peer details', () => {
      const ip = '45.76.93.4'
      return api.getPeer({
        ip: ip,
        port: 4002
      })
        .then((res) => {
          expect(res).to.be.an('object')
          expect(res.ip).to.be.equal(ip)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getPeerVersion()', () => {
    it('should return peer version', () => {
      return api.getPeerVersion()
        .then((res) => {
          expect(res).to.be.a('string')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })
})
