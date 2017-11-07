## Blocks
Blocks related API calls.

### Get blocks height
Get the block height of the ark blockchain

```js
jark.getBlocksHeight()
  .then((blockHeight) => {
    console.log(blockHeight); // Return block height
  });
```

### Get blockchain fee
Get the blockchain transaction fee

```js
jark.getBlockchainFee()
  .then((blockchainFee) => {
    console.log(blockchainFee); // Return blockchainFee
  });
```

### Get netHash
Get network netHash

```js
jark.getNetHash()
  .then((netHash) => {
    console.log(netHash); // Return netHash
  });
```