## Blocks
Blocks related API calls.

### Get blocks
Get the block height of the ark blockchain

#### Options
- totalFee: total fee of block. (Integer)
- totalAmount: total amount of block. (Integer)
- previousBlock: previous block of need block. (String)
- height: height of block. (Integer)
- generatorPublicKey: generator id of block in hex. (String)
- limit: limit of blocks to add to response. Default to 20. (Integer)
- offset: offset to load blocks. (Integer)
- orderBy: field name to order by. Format: fieldname:orderType. Example: height:desc, timestamp:asc (String)

```js
const params = {
  'limit': 2,
  'orderBy': 'height:asc',
  'offset': 3
}

jark.getBlocks(params)
  .then((blocks) => {
    console.log(blocks); // Return blocks according to params
  });
```
**Response**
```
[
  {
    id: "14231208437349721517",
    version: 0,
    timestamp: 3904912,
    height: 4,
    previousBlock: "18033610744854059538",
    numberOfTransactions: 0,
    totalAmount: 0,
    totalFee: 0,
    reward: 0,
    payloadLength: 0,
    payloadHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    generatorPublicKey: "03d5b3efbe98631443c5cdf4de8a610dd2655b86427bf70aa209451b54256f6758",
    generatorId: "DT12wf9erZyNJbBQrpbPDmfH3J8txiDgTE",
    blockSignature: "3045022100d48004636dbc5270731696d6ae71c541e64adde739a1fe47a5c915541e88a22c0220752a245d6f8417ca2cb09d541792c547001cd13309b2ed54153f8a63f8017c29",
    confirmations: 1746051,
    totalForged: "0"
  },
  {
    id: "9086954555129290462",
    version: 0,
    timestamp: 3904920,
    height: 5,
    previousBlock: "14231208437349721517",
    numberOfTransactions: 0,
    totalAmount: 0,
    totalFee: 0,
    reward: 0,
    payloadLength: 0,
    payloadHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    generatorPublicKey: "03f264a6d2ebb62279313a6fd7fec4e2244785839b625a0b0c261e689ce5401d87",
    generatorId: "DFHdEBuVCz5zfj8yeo3BmKEdsEKpMaYRRw",
    blockSignature: "304402203658f0471fe2f67f1419800d342e83346804ab4566340c08062f299748c39c6402206a86b7149380832b21faebefe383940a8c15d1602de4533d5bf723bed485f98c",
    confirmations: 1746050,
    totalForged: "0"
  }
]
```

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