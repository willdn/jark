import { expect } from 'chai'
import * as api from '../src'

describe('Transaction', () => {

  describe('api.getTransactionsList()', () => {
    it('should return transactions list', () => {
      return api.getTransactionsList()
      .then((res) => {
        expect(res).to.be.an('array')
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
    })
  })

  describe('api.getTransactionById()', () => {
    it('should return transactions details', () => {
      return api.getTransactionById('a4f17700b9ec74da9283c522ddac26da6974930769c8437396df50a778b6ffbf')
      .then((res) => {
        expect(res).to.be.an('object')
        expect(res.senderId).to.be.equal('D5GcwQbPasZPmZvbPUc3bgDcvhpFT5Q36q')
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
    })
  }).timeout(5000)

  describe('api.createTransaction()', () => {
    it('should return transaction', () => {
      api.setNetwork('Dev')
      const tx = api.createTransaction({
        to: 'DGd99C51SgwyEPqnxgxDNzbCB7YqHACYZa',
        amount: 1,
        message: null,
        passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster',
        secondPassphrase: null
      })
      expect(tx.amount).to.be.equal(100000000)
      expect(tx.senderPublicKey).to.be.equal('02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a')
    })
  })
})
