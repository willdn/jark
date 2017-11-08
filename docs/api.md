## API
API related API calls.

### Get keys
Generate a public / private key pair from random mnemonic

```js
const keys = jark.getKeys();
console.log(keys); // Return keys pair
```
**Response**
```
{ 
  publicKey: '03ae23d16816cc153f3a5d5be565b69d7c911f39767059a1266218569d3217df9b',
  privateKey: '',
  passphrase: 'service cup whisper bundle reform tourist fruit snack injury salmon teach develop',
  address: 'AZWcpL5stobf777P8oENaJ2RMabXvZFS5V'
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