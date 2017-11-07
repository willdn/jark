## Peer
Peer related API calls.

### Get peers list
Get an array of network peers

```js
jark.getPeersList()
  .then((peers) => {
    console.log(peers); // Array of peers
  })
```
**Response**
```
[
  { 
    ip: '167.114.43.40',
    port: 4002,
    version: '1.1.0',
    errors: 0,
    os: 'linux4.4.0-79-generic',
    height: 1733517,
    status: 'OK',
    delay: 290 
  },
  { 
    ip: '145.239.88.101',
    port: 4002,
    version: '1.1.1',
    errors: 0,
    os: 'linux4.4.0-98-generic',
    height: 1733502,
    status: 'OK',
    delay: 81 
  }
]
```
### Get peer
Get peer details by IP

```js
jark.getPeer({
  ip: 'Peer ip',
  port: 'Peer port'
})
  .then((peer) => {
    console.log(peer); // Peer details
  })
```

**Response**
```
{ 
  ip: '45.76.93.4',
  port: 4002,
  version: '1.1.0',
  errors: 0,
  os: 'linux4.4.0-93-generic',
  height: 1733444,
  status: 'OK',
  delay: 51
}
```
### Get peer version
Get the version of the connected peer

```js
jark.getPeerVersion()
  .then((peerVersion) => {
    console.log(peerVersion); // Peer version
  })
```