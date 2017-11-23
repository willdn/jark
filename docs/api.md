## API

- [Get keys](#get-keys)
- [Get endpoint](#get-endpoint)
- [Get network](#get-network)
- [Set network](#set-network)
- [Get second signature fee](#get-second-signature-fee)

### Get keys
Generate a public / private key pair

```js
// Generate a random keys pair
const keys = jark.getKeys();
console.log(keys); // Return keys pair
// keys
{ 
  publicKey: '030bf73cb609f90d47a62eda1c411e5c7ee463db47fba5e5030b0f2932353d5618',
  privateKey: 'cb3e4b3d24e1c67c075de107c6a527cb7d37a1ec7d7f9bc85091c271a6020962',
  passphrase: 'quick tribe subway tackle wolf fitness leopard syrup kitten reject mansion vast',
  address: 'ASJQHQZyMCCmsXw3Ad2ujiq7Sm8th6eJiy'
}

// Generate from a given passphrase
const keys = jark.getKeys('slogan plug release deny solar seed inject tag light winner box oyster');
console.log(keys);
// keys
{ 
  publicKey: '02e9239013baf66c98360cd267ba1917674e218a894ac2f36d72e40cffc6e55e8a',
  privateKey: '73079e6c1ebce0c37cf824ee4132a7c2d6a3340cd80eea1aa23b566911b42005',
  passphrase: 'slogan plug release deny solar seed inject tag light winner box oyster',
  address: 'D7VSQMHvcf3j6o6LxEeAnazYYbVyeTJw4v'
}
```

### Get endpoint
Get the API endpoint

```js
const endpoint = jark.getEndpoint();
console.log(endpoint); // Return endpoint url
```

### Get network
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

### Get second signature fee
Get the second signature fee

```js
jark.getSecondSignatureFee()
  .then((fee) => {
    console.log(fee); // Return fee
  })
```