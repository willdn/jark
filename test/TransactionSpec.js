import { expect } from 'chai'
import * as api from '../src'

const address = 'DSCgKwRrKM2QNo4nrbSTwbW6fN5i7ZXjRu'

describe('Transaction', () => {

  describe('api.getTransactions()', () => {
    it('should return transactions array', () => {
      return api.getTransactions()
      .then((res) => {
        expect(res).to.be.an('array')
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
    })
  })

  describe('api.getTransactions() with params', () => {
    it('should return transactions according to params', () => {
      return api.getTransactions({
        'limit': 10
      })
      .then((res) => {
        expect(res).to.be.an('array')
        expect(res.length).to.be.equal(10)
      })
      .catch((e) => {
        console.log(e)
        throw e
      })
    })
  })

  describe('api.getTransactionById()', () => {
    it('should return transactions details', () => {
      api.setNetwork('Dev')
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

  describe('api.getTransactionsFromAddress()', () => {
    it('should return transactions from address', () => {
      return api.getTransactionsFromAddress(address)
        .then((res) => {
          expect(res.length).to.be.equal(3)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
    it('should return transactions from address with options', () => {
      return api.getTransactionsFromAddress(address, {
        'limit': 1
      })
        .then((res) => {
          expect(res.length).to.be.equal(1)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.sendTransaction()', () => {
    it('should send transaction to the network', () => {
      api.setNetwork('Dev')
      const tx = api.createTransaction({
        to: 'DGd99C51SgwyEPqnxgxDNzbCB7YqHACYZa',
        amount: 1,
        message: null,
        passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster',
        secondPassphrase: null
      })
      expect(tx.senderPublicKey).to.be.equal('02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a')
      return api.sendTransaction(tx)
        .then((res) => {
          expect(res.error).to.be.equal('Account does not have enough ARK: D7VSQMHvcf3j6o6LxEeAnazYYbVyeTJw4v balance: 0')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
      
    })
  })

  describe('api.getUnconfirmedTransactions()', () => {
    it('should get unconfirmed transactions from network', () => {
      return api.getUnconfirmedTransactions()
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.createVoteTransaction()', () => {
    it('should create a vote transaction', () => {
      api.setNetwork('Dev')
      const tx = api.createVoteTransaction({
        passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster',
        delegates: ['+03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad'],
        secondPassphrase: null
      })
      expect(tx.senderPublicKey).to.be.equal('02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a')
      return api.sendTransaction(tx)
        .then((res) => {
          expect(res.error).to.be.equal('Account does not have enough ARK: D7VSQMHvcf3j6o6LxEeAnazYYbVyeTJw4v balance: 0')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.createSecondPassTransaction()', () => {
    it('should create a second passphrase transaction', () => {
      api.setNetwork('Dev')
      const tx = api.createSecondPassTransaction('slogan plug release deny solar seed inject tag light winner box oyster',
      'fly regular umbrella bridge time wrong enlist broccoli rapid during genre ball')
      expect(tx.type).to.be.equal(1)
      expect(tx.senderPublicKey).to.be.equal('02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a')
      expect(tx.asset.signature.publicKey).to.be.equal('03fdb8bca0b63795752066a94e46fb071e2964bf1edd6a674dab874468a0a4d6b3')
    })
  })
})