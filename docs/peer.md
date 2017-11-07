## Peer
Peer related API calls.

### Get peers list
Get an array of network peers

```js
jark.getPeersList()
  .then((res) => {
    console.log(res); // Array of peers
  })
```

### Get peer
Get peer details by IP

```js
jark.getPeer({
  ip: 'Peer ip',
  port: 'Peer port'
})
  .then((res) => {
    console.log(res); // Peer details
  })
```

### Get peer version
Get the version of the connected peer

```js
jark.getPeerVersion()
  .then((res) => {
    console.log(res); // Peer version
  })
```