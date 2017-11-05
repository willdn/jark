/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai'
import * as api from '../src/api'
import nock from 'nock'
import response from './response'

describe('API', () => {

  describe('api.getEndpoint()', () => {
    it('should return api endpoint', () => {
      const endpoint = api.getEndpoint()
      expect(endpoint).to.be.equal('https://node1.arknet.cloud')
    })

  })

  describe('api.getBlocksHeight()', () => {
    it('should return block height', () => {
      return api.getBlocksHeight()
        .then((res) => {
          expect(res).to.be.a('number')
        })
        .catch((e) => {
          console.log(e)
          throw e
        })
    })
  })

  describe('api.getBlockchainFee()', () => {
    it('should return block fee', () => {
      return api.getBlockchainFee()
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
