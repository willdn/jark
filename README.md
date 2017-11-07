# jark

[![Build Status](https://travis-ci.org/willdn/jark.svg?branch=master)](https://travis-ci.org/willdn/jark)
[![Coverage Status](https://coveralls.io/repos/github/willdn/jark/badge.svg?branch=master)](https://coveralls.io/github/willdn/jark?branch=master)

JavaScript ARK API wrapper to interact with the [ARK](https://ark.io) blockchain. Can be used to query or make transaction on the ARK Mainnet and Devnet from the client as a browserify or webpack compiled module, or on the server as a standard Node.js module.

## Install

`npm i jark --save`

## Usage

```js
var jark = require('jark');

jark.getBlocksHeight()
  .then((height) => {
    console.log(height); // Return 2465689
  });

jark.getBalance('ASANY312MWN7Nd2any9DFh2bRiZRbQwpuZ')
  .then((balance) => {
    console.log(balance); // Return address balance
  });

// Set network to dev ('Main' | 'Dev')
jark.setNetwork('Dev')

jark.getBlocksHeight()
  .then((height) => {
    console.log(height); // Return 1727011
  });
```

### Sending transaction
```js
const tx = jark.createTransaction({
  to: 'DGd99C51SgwyEPqnxgxDNzbCB7YqHACYZa', // Recipient address
  amount: 1, // Amount to send
  message: null, // Optionnal message
  passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster', // Sender passphrase
  secondPassphrase: null // Optionnal second passphrase
})

jark.sendTransaction(tx)
  .then((res) => {
    console.log(res) // Result of the transaction
  })
  .catch((e) => {
    console.log(e)
  })
```


## Documentation
- [Account](/docs/account.md)
- [Transaction](/docs/transaction.md)
- [Blocks](/docs/blocks.md)
- [Delegate](/docs/delegate.md)
- [Peer](/docs/peer.md)
- WIP

## Build

```bash
git clone https://github.com/willdn/jark.git
cd jark
npm install
npm run build
```


## Test

`npm run test`

## Donations

- ARK : AePNZAAtWhLsGFLXtztGLAPnKm98VVC8tJ
- ETH : 0x51B9b64a00C05b320Adb3c384612c6Bb4dCEf175
- NEO/GAS : ALerku2yrULPckL5uSQsTb36bBdkrEZbaG

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.