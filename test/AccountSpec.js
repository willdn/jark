import { expect } from 'chai'
import * as api from '../src'

const address = 'DSCgKwRrKM2QNo4nrbSTwbW6fN5i7ZXjRu'

describe('account', () => {
  api.setNetwork('Dev')
  
  describe('api.getBalance()', () => {
    it('should return balance from address', () => {
      return api.getBalance(address)
        .then((res) => {
          expect(res).to.be.a('number')
          expect(res).to.be.equal(19)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    }).timeout(5000)
  })

  describe('api.getAccount()', () => {
    it('should return account details from address', () => {
      return api.getAccount(address)
        .then((res) => {
          expect(res.address).to.be.equal(address)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegatesFromAddress()', () => {
    it('should return delegates from address', () => {
      return api.getDelegatesFromAddress(address)
        .then((res) => {
          expect(res.length).to.be.equal(1)
          expect(res[0].username).to.be.equal('darkjarunik')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegatesFee()', () => {
    it('should return delegates fee', () => {
      return api.getDelegatesFee()
        .then((res) => {
          expect(res).to.be.a('number')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getPublicKey()', () => {
    it('should return public key from address', () => {
      return api.getPublicKey(address)
        .then((res) => {
          expect(res).to.be.equal('033e4ea71cf6040e0cb6e4cf1a762a87b10d5f696975a657272d5703517a8c90f6')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

})
