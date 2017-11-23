## Transaction
Transaction related API calls.

- [Get transactions from address](#get-transactions-from-address)
- [Create transaction](#create-transaction)
- [Create vote transaction](#create-vote-transaction)
- [Create signature transaction](#create-signature-transaction)
- [Send transaction](#send-transaction)
- [Get transactions](#get-transactions)
- [Get transaction by id](#get-transaction-by-id)
- [Get unconfirmed transactions](#get-unconfirmed-transactions)

### Get transactions from address
Get all the transactions from a given address
#### Options

- blockId: Block id of transaction. (String)
- limit: Limit of transaction to send in response. Default is 20. (Number)
- offset: Offset to load. (Integer number)
- orderBy: Name of column to order. After column name must go "desc" or "asc" to choose order type. Example: orderBy=timestamp:desc (String)

```js
jark.getTransactionsFromAddress('Account address')
  .then((transactions) => {
    console.log(transactions); // Return transactions array
  });

// With options
jark.getTransactionsFromAddress('Account address', {
    'limit': 20,
    'orderBy': 'amount:desc'
  })
  .then((transactions) => {
    console.log(transactions); // Return transactions array
  });
```

### Create transaction
Create a new transaction

```js
const tx = jark.createTransaction({
  to: 'DGd99C51SgwyEPqnxgxDNzbCB7YqHACYZa', // Recipient address
  amount: 1, // Amount to send
  message: null, // Optionnal message
  passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster', // Sender passphrase
  secondPassphrase: null // Optionnal second passphrase
})
```
**Response**
```
{ 
  type: 0,
  amount: 100000000,
  fee: 10000000,
  recipientId: 'DGd99C51SgwyEPqnxgxDNzbCB7YqHACYZa',
  timestamp: 19948311,
  asset: {},
  senderPublicKey: '02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a',
  signature: '3045022100a4cf0bdb5d42dcacbfb8b9ef90693bf96c6d973923f3b20f2958e07da661934902206c51be663e15d1c569d47d8f5a3212bdb57b98fcd196c8f0503662fbed854bf6',
  id: '4a06de0211978a95c21dd6942673568455e5086e7e366f45d7eac75bb888ca8c'
}
```

### Create vote transaction
Create a vote/unvote transaction

```js
// Vote for darkjarunik
const tx = jark.createVoteTransaction({
  passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster', // Voters passphrase
  delegates: ['+03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad'], // Public key of the delegate to vote
  secondPassphrase: null // Second passphrase (optionnal)
})

// Unvote for darkjarunik
const tx = jark.createVoteTransaction({
  passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster', // Voters passphrase
  delegates: ['-03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad'], // Public key of the delegate to unvote
  secondPassphrase: null // Second passphrase (optionnal)
})
```
**Response**
```
{ 
  type: 3,
  amount: 0,
  fee: 100000000,
  recipientId: 'D7VSQMHvcf3j6o6LxEeAnazYYbVyeTJw4v',
  senderPublicKey: '02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a',
  timestamp: 20134872,
  asset: { votes: [ '+03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad' ] },
  signature: '304402201568fa523a7f069fe4ff61643fb76496d7774984779899ac6b0edccfc617abb20220566b3e0fa8500ea63cea050b5862a47e2021a18e4efade0ce423cf7176b0101a',
  id: '45554984b1f29c796b0b2c494d5f3e6b88c8aff4597c2f59cb131d2aeed9156c'
}
```

### Create signature transaction
Create a second passphrase transaction

```js
// Vote for darkjarunik
const tx = jark.createSecondPassTransaction(
  'slogan plug release deny solar seed inject tag light winner box oyster', // Account passphrase
  'fly regular umbrella bridge time wrong enlist broccoli rapid during genre ball' // Second passhrase to set
)
```
**Response**
```
{ 
  type: 1,
  amount: 0,
  fee: 500000000,
  recipientId: null,
  senderPublicKey: '02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a',
  timestamp: 20159137,
  asset: { signature: { publicKey: '03fdb8bca0b63795752066a94e46fb071e2964bf1edd6a674dab874468a0a4d6b3' } },
  signature: '3044022048f5de5d05eec0510a5e8250366e816821d6c8865fadf63f82d33bba582a3cd5022014dc65f9857a9d0cd52ae99e9edbf20fa36a367d58071c7cfd2c324d6bacd0ce',
  id: '2c9f38591d92bdd0e3fb9e17516951a597f4ba101806cffb645f518a8215056c'
}
```

### Send transaction
Send a transaction to the network

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
    console.log(res)
  })
  .catch((e) => {
    console.log(e)
  })
```

### Get transactions
Get an array of the last transactions on the network

#### Options

- blockId: Block id of transaction. (String)
- senderId: Sender address of transaction. (String)
- recipientId: Recipient of transaction. (String)
- limit: Limit of transaction to send in response. Default is 20. (Number)
- offset: Offset to load. (Integer number)
- orderBy: Name of column to order. After column name must go "desc" or "asc" to choose order type. Example: orderBy=timestamp:desc (String)

```js
jark.getTransactions()
  .then((transactions) => {
    console.log(transactions); // Return transactions array
  });

// With options
jark.getTransactions({
    'limit': 5,
    'orderBy': 'confirmations:asc'
  })
  .then((transactions) => {
    console.log(transactions); // Return transactions array accroding to params
  });
```
**Response**
```
[
  {
    id: "e40ce11cab82736da1cc91191716f3c1f446ca7b6a9f4f93b7120ef105ba06e8",
    blockid: "13149578060728881902",
    type: 0,
    timestamp: 0,
    amount: 12500000000000000,
    fee: 0,
    senderId: "DUFeXjJmYt1mWY3auywA1EQSqfCv5kYYfP",
    recipientId: "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
    senderPublicKey: "03cb7bca143376721d0e9e3f3ccb0dc2e7e8470c06e630c3cef73f03e309b558ad",
    signature: "3044022016ecdf3039e69514c7d75861b22fc076496b61c07a1fcf793dc4f5c76fa0532b0220579c4c0c9d13720f9db5d9df29ed8ceab0adc266c6c160d612d4894dc5867eb1",
    asset: { },
    confirmations: 1731324
  },
  {
  id: "eb0146ac79afc228f0474a5ae1c4771970ae7880450b998c401029f522cd8a21",
  blockid: "13149578060728881902",
  type: 2,
  timestamp: 0,
  amount: 0,
  fee: 0,
  senderId: "DNL81CT6WNG1PHjobBmLvKwLV3UUscBymB",
  senderPublicKey: "03e5b39a83e6c7c952c5908089d4524bb8dda93acc2b2b953247e43dc4fe9aa3d1",
  signature: "3045022100e3e38811778023e6f17fefd447f179d45ab92c398c7cfb1e34e2f6e1b167c95a022070c36439ecec0fc3c43850070f29515910435d389e059579878d61b5ff2ea337",
  asset: {
    delegate: {
      username: "genesis_1",
      publicKey: "03e5b39a83e6c7c952c5908089d4524bb8dda93acc2b2b953247e43dc4fe9aa3d1"
    }
  },
  confirmations: 1731324
  }
]
```
### Get transaction by id
Get transaction details given a transaction hash (id)

```js
jark.getTransactionById('e40ce11cab82736da1cc91191716f3c1f446ca7b6a9f4f93b7120ef105ba06e8')
  .then((transaction) => {
    console.log(transaction); // Return transaction details
  });
```
**Response**
```
{
  id: "e40ce11cab82736da1cc91191716f3c1f446ca7b6a9f4f93b7120ef105ba06e8",
  blockid: "13149578060728881902",
  height: 1,
  type: 0,
  timestamp: 0,
  amount: 12500000000000000,
  fee: 0,
  senderId: "DUFeXjJmYt1mWY3auywA1EQSqfCv5kYYfP",
  recipientId: "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
  senderPublicKey: "03cb7bca143376721d0e9e3f3ccb0dc2e7e8470c06e630c3cef73f03e309b558ad",
  signature: "3044022016ecdf3039e69514c7d75861b22fc076496b61c07a1fcf793dc4f5c76fa0532b0220579c4c0c9d13720f9db5d9df29ed8ceab0adc266c6c160d612d4894dc5867eb1",
  asset: { },
  confirmations: 1731380
}
```

### Get unconfirmed transactions
Get an array of unconfirmed transactions on the network

```js
jark.getUnconfirmedTransactions()
  .then((transactions) => {
    console.log(transactions); // Return transactions array
  });
```
**Response**
```
[
  {
    id: "e40ce11cab82736da1cc91191fe6f3c1f446ca7b6a9f4f93b7120ef105ba06e8",
    blockid: "13149578060728881902",
    type: 0,
    timestamp: 0,
    amount: 12500000000000000,
    fee: 0,
    senderId: "DmFeXjJmYt1mWZ2auywA1EQSqfCv5kYYfP",
    recipientId: "DGihocTkwDyjkHUvmg6aG8jThYTic47GzU9",
    senderPublicKey: "03cb7bca143376721d0e9e3f3ccb0dc2e7e8470c06e630c3cef73f03e309b558ad",
    signature: "304402204s5decdf3039e69514c7d75861b22fcfds96b61c07a1fcf793dc4f5c76fa0532b0220579c4c0c9d13720f9db5d9df29ed8ceab0adc266c6c160d612d4894dc5867eb1",
    asset: { },
    confirmations: 0
  }
]
```