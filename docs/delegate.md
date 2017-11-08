## Delegate
Delegate related API calls.

### Get delegates
Get the array of delegates

```js
jark.getDelegates()
  .then((delegates) => {
    console.log(delegates); // Return delegates array
  });
```

### Get delegate by username
Get the delegate details from his username

```js
jark.getDelegateByUsername('Delegate username')
  .then((delegate) => {
    console.log(delegate); // Return delegate details
  });
```

### Get delegate by public key
Get the delegate details from his public key

```js
jark.getDelegateByPublicKey('Delegate public key')
  .then((delegate) => {
    console.log(delegate); // Return delegate details
  });
```

### Get next forgers
Get the array of the next delegate forgers

```js
jark.getNextForgers()
  .then((nextForgers) => {
    console.log(nextForgers); // Return next forgers array
  });
```

### Get delegate voters
Get delegate voters array from delegate public key

```js
jark.getDelegateVoters('Delegate public key')
  .then((voters) => {
    console.log(voters); // Return array voters
  });
```
**Response**
```
{
  username: null,
  address: "D5CUKeSXRB29eWTPTdH8znGCfPrtEftdHt",
  publicKey: "02c5e5347a5b62dda6d1d863751209f4b7af93847bf2fa234202ae2e9f378f7eee",
  balance: "600000000"
},
{
  username: "darkjarunik002",
  address: "D6ZiWdJBoyP5j4nN8S3B7YicvUHTtC2mAE",
  publicKey: "027e01c86f4de584eebb0ca291bfb58e9dc46476988d5e57ef767f86747e25a6f1",
  balance: "1890653018"
}
```
