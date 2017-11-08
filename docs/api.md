## API
API related API calls.

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