import { expect } from 'chai'
import * as delegate from '../src/delegate'

describe('delegate', () => {

  describe('delegate.getDelegates()', () => {
    it('should return top delegates list', () => {
      return delegate.getDelegates()
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

  describe('delegate.getByUsername()', () => {
    it('should return delegate by username', () => {
      return delegate.getByUsername('darkjarunik')
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

  describe('delegate.getByPublicKey()', () => {
    it('should return delegate by public key', () => {
      return delegate.getByPublicKey('03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad')
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
})
