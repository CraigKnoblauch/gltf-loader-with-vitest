Observing the following error when attempting to use GLTFLoader in a test case:
```
Caused by: TypeError: Invalid URL: ./test.glb
 ❯ new URLImpl node_modules/whatwg-url/lib/URL-impl.js:23:13
 ❯ Object.exports.setup node_modules/whatwg-url/lib/URL.js:54:12
 ❯ new URL node_modules/whatwg-url/lib/URL.js:115:22
 ❯ FileLoader.load node_modules/three/build/three.module.js:44831:15
 ❯ GLTFLoader.load node_modules/three/examples/jsm/loaders/GLTFLoader.js:241:10
 ❯ test/GLTFLoader.test.js:7:16
```

To achieve this error, first install all dependencies, then run the test case:
```
npm install
npm run test
```
