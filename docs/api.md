## API

### Get keys
Generate a public / private key pair from random mnemonic

```js
const keys = jark.getKeys();
console.log(keys); // Return keys pair
```
**Response**
```
{ 
  publicKey: '030bf73cb609f90d47a62eda1c411e5c7ee463db47fba5e5030b0f2932353d5618',
  privateKey: 'cb3e4b3d24e1c67c075de107c6a527cb7d37a1ec7d7f9bc85091c271a6020962',
  passphrase: 'quick tribe subway tackle wolf fitness leopard syrup kitten reject mansion vast',
  address: 'ASJQHQZyMCCmsXw3Ad2ujiq7Sm8th6eJiy'
}
```

### Get endpoint
Get the API endpoint

```js
const endpoint = jark.getEndpoint();
console.log(endpoint); // Return endpoint url
```

### Get netowrk
Get the current network object

```js
const network = jark.getNetwork();
console.log(network); // Return network object
```
**Response**
```
{
  MAIN: {
    label: 'Main',
    version: 0x17
  }
}
```

### Set netowrk
Set network

```js
jark.setNetwork('Dev');
console.log(jark.getNetwork()); // Return DEV network object

jark.setNetwork('Main');
console.log(jark.getNetwork()); // Return MAIN network object
```