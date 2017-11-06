## Accounts
Account related API calls.

### Get balance
Get the balance of the address

```js
jark.getBalance('Account address')
  .then((balance) => {
    console.log(balance); // Return address balance
  });
```

### Get public key
Get the public key of the address

```js
jark.getPublicKey('Account address')
  .then((publicKey) => {
    console.log(publicKey); // Return address public key
  });
```

### Get account details
Get the account details of the address

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

### Get transactions
Get all the transactions from address

```js
jark.getTransactions('Account address')
  .then((transactions) => {
    console.log(transactions); // Return transactions array
  });
```