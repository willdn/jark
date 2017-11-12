import { expect } from 'chai'
import * as api from '../src'

describe('delegate', () => {

  describe('api.getDelegates()', () => {
    it('should return top delegates list', () => {
      return api.getDelegates()
        .then((res) => {
          expect(res).to.be.an('array')
          expect(res.length).to.be.equal(51)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegates() params', () => {
    it('should return delegates list according to params', () => {
      return api.getDelegates({
        'limit': 5
      })
        .then((res) => {
          expect(res).to.be.an('array')
          expect(res.length).to.be.equal(5)
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegateByUsername()', () => {
    it('should return delegate by username', () => {
      return api.getDelegateByUsername('darkjarunik')
        .then((res) => {
          expect(res).to.be.an('object')
          expect(res.username).to.be.equal('darkjarunik')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegateByPublicKey()', () => {
    it('should return delegate by public key', () => {
      return api.getDelegateByPublicKey('03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad')
        .then((res) => {
          expect(res).to.be.an('object')
          expect(res.username).to.be.equal('darkjarunik')
          expect(res.publicKey).to.be.equal('03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getNextForgers()', () => {
    it('should return next forgers delegate list', () => {
      return api.getNextForgers()
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getDelegateVoters()', () => {
    it('should return voters list from delegate', () => {
      return api.getDelegateVoters('03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad')
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.searchDelegate()', () => {
    it('should return delegates according to search', () => {
      return api.searchDelegate('dark')
        .then((res) => {
          expect(res).to.be.an('array')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

})
