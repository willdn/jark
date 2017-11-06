# jark

[![Build Status](https://travis-ci.org/willdn/jark.svg?branch=master)](https://travis-ci.org/willdn/jark)

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

## Documentation
- [Accounts](/docs/accounts.md)
- [Blocks](/docs/blocks.md)
- WIP

## Build

```
npm install
npm run build
```


## Test

`npm run test`