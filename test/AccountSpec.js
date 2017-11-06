import { expect } from 'chai'
import * as account from '../src/account'

const address = 'DSCgKwRrKM2QNo4nrbSTwbW6fN5i7ZXjRu'

describe('account', () => {

  describe('account.getBalance()', () => {
    it('should return balance from address', () => {
      return account.getBalance(address)
        .then((res) => {
          expect(res).to.be.a('number')
          expect(res).to.be.equal(19)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('account.getAccount()', () => {
    it('should return account details from address', () => {
      return account.getAccount(address)
        .then((res) => {
          expect(res.address).to.be.equal(address)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('account.getTransactions()', () => {
    it('should return transactions from address', () => {
      return account.getTransactions(address)
        .then((res) => {
          expect(res.length).to.be.equal(3)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('account.getDelegates()', () => {
    it('should return delegates from address', () => {
      return account.getDelegates(address)
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

  describe('account.getPublicKey()', () => {
    it('should return public key from address', () => {
      return account.getPublicKey(address)
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
