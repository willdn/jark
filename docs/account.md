## Accounts
Account related API calls.

- [Get balance](#get-balance)
- [Get public key](#get-public-key)
- [Get account](#get-account)
- [Get delegates from address](#get-delegates-from-address)
- [Get delegates fee](#get-delegates-fee)

### Get balance
Get the balance of a given address

```js
jark.getBalance('Account address')
  .then((balance) => {
    console.log(balance); // Return address balance
  });
```

### Get public key
Get the public key of a given address

```js
jark.getPublicKey('Account address')
  .then((publicKey) => {
    console.log(publicKey); // Return address public key
  });
```

### Get account
Get the account details of a given address

```js
jark.getAccount('Account address')
  .then((account) => {
    console.log(account); // Return address account details
  });
```
**Response**
```
{
  "address": "Address of account. (String)",
  "unconfirmedBalance": "Unconfirmed balance of account. (String)",
  "balance": "Balance of account. (String)",
  "publicKey": "Public key of account. (Hex String)",
  "unconfirmedSignature": "If account enabled second signature, but it's still not confirmed. (0 or 1)",
  "secondSignature": "If account enabled second signature. (0 or 1)",
  "secondPublicKey": "Second signature public key. (Hex String)"
}
```
### Get delegates from address
Get delegates from a given address
*Note : * This return an array, however, it is possible to elect only one delegate.

```js
jark.getDelegatesFromAddress()
  .then((delegates) => {
    console.log(delegates); // Return delegate from address
  });
```

**Response**
```
[
  {
    "username": "darkjarunik",
    "address": "DBi2HdDY8TqMCD2aFLVomEF92gzeDmEHmR",
    "publicKey": "03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad",
    "vote": "46444783236470",
    "producedblocks": 35703,
    "missedblocks": 1192,
    "rate": 4,
    "approval": 0.36,
    "productivity": 96.77
  }
]
```

### Get delegates fee
Get delegate register fee

```js
jark.getDelegatesFee()
  .then((fee) => {
    console.log(fee); // Return delegate fee
  });
```