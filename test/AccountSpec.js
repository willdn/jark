import { expect } from 'chai'
import * as account from '../src/account'

const address = 'DSCgKwRrKM2QNo4nrbSTwbW6fN5i7ZXjRu'

describe('account', () => {

  describe('account.getBalance()', () => {
    it('should return balance from address', () => {
      return account.getBalance(address)
        .then((res) => {
          expect(res).to.be.a('number')
          expect(res).to.be.equal(20)
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
          expect(res.length).to.be.equal(2)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

})
