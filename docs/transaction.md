## Transaction
Transaction related API calls.

### Create transaction
[Get transactions from address](/docs/account.md)

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
{ type: 0,
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

### Get transactions list
Get an array of the last transactions on the network

```js
jark.getTransactionsList()
  .then((transactions) => {
    console.log(transactions); // Return transactions array
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
Get transaction details by transaction hash (id)

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
