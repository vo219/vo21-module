# vo21-module

A Node.js module for simple Caesar cipher encryption and decryption.

## Installation

You can install this module via npm: `npm install vo21-module`

## Usage

```javascript
const cipherio = require('cipherio');

// Encrypt text with a shift of 3
const encryptedText = cipherio.encryptText('Hello, World!', 3);
console.log(encryptedText); // Output: Khoor, Zruog!

// Decrypt text with a shift of 3
const decryptedText = cipherio.decryptText('Khoor, Zruog!', 3);
console.log(decryptedText); // Output: Hello, World!
```

