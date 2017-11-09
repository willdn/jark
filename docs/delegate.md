## Delegate
Delegate related API calls.

- [Get delegates](#get-delegates)
- [Get delegate by username](#get-delegate-by-username)
- [Get delegate by public key](#get-delegate-by-public-key)
- [Get next forgers](#get-next-forgers)
- [Get delegate voters](#get-delegate-voters)
- [Search delegates](#search-delegates)

### Get delegates
Get the array of delegates

#### Options

- limit: Limit to show. Integer. Maximum is 100. (Integer)
- offset: Offset (Integer)
- orderBy: Order by field (String)

```js
jark.getDelegates()
  .then((delegates) => {
    console.log(delegates); // Return delegates array
  });

// With options
jark.getDelegates({
    'limit': 2,
    'orderBy': 'productivity:desc'
  })
  .then((delegates) => {
    console.log(delegates); // Return delegates array according to params
  });
```

**Response**
```
[
  {
    username: "d_chris",
    address: "DQUjMT6fhJWbwhaYL5pPdX9v5qPiRcAzRb",
    publicKey: "02bcfa0951a92e7876db1fb71996a853b57f996972ed059a950d910f7d541706c9",
    vote: "11511518885161274",
    producedblocks: 30073,
    missedblocks: 7144,
    rate: 1,
    approval: 89.59,
    productivity: 80.8
  },
  {
    username: "d_arky",
    address: "DKf1RUGCM3G3DxdE7V7DW7SFJ4Afmvb4YU",
    publicKey: "02dcb94d73fb54e775f734762d26975d57f18980314f3b67bc52beb393893bc706",
    vote: "623563509214733",
    producedblocks: 20696,
    missedblocks: 15052,
    rate: 2,
    approval: 4.85,
    productivity: 57.89
  }
]
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
[
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
]
```

### Search delegates
Get delegates matching search query

Valid orderBy value are: `username:asc`, `username:desc`, `address:asc`, `address:desc`, `publicKey:asc`, 
`publicKey:desc`, `vote:asc`, `vote:desc`, `missedblocks:asc`, `missedblocks:desc`, `producedblocks:asc`, `producedblocks:desc`

```js
jark.searchDelegate('Dark', {
    'orderBy': 'missedblocks:asc'
  })
  .then((delegates) => {
    console.log(delegates); // Return delegates matching query
  });
```
**Response**
```
[ 
  { 
    username: 'calidark',
    address: 'DJmr887qE9pZ374tAEnzcnR3hZqGJ5DYwM',
    publicKey: '03ea30ad4c2c5906061b09fac51a6f4b7765e59091ddd101af28d1ec901d42b41f',
    vote: '17681450000000',
    producedblocks: 7828,
    missedblocks: 4
  },
  { 
    username: 'dark_jmc',
    address: 'D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz',
    publicKey: '02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586',
    vote: '4505269999900',
    producedblocks: 30898,
    missedblocks: 59 
  }
  { 
    username: 'darkjarunik',
    address: 'DBi2HdDY8TqMCD2aFLVomEF92gzeDmEHmR',
    publicKey: '03bd4f16e39aaba5cba6a87b7498b08ce540f279be367e68ae96fb05dfabe203ad',
    vote: '45491753236470',
    producedblocks: 32797,
    missedblocks: 1192
  }
]
```
