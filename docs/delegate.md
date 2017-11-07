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