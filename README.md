# XXTEA for NodeJS

## Introduction

XXTEA is a fast and secure encryption algorithm. This is a XXTEA library for NodeJS.

It is different from the original XXTEA encryption algorithm. It encrypts and decrypts Uint8Array instead of uint32[], and the key is also Uint8Array. If you want to encrypt String, you can use xxtea.toBytes(str) to convert String to Uint8Array, when you decrypt Uint8Array, you can use xxtea.toString(bytes) to convert the result to String. Conversion between string and Uint8Array is using UTF8 encoding.

## Usage

```javascript
var XXTea = require('./XXTea');
var btoa = require('btoa');
var atob = require('atob');

var passPhrase = 'SomeCrazyPassword!#00';
var message = 'Some secert message';
console.log("original message: " + message);

//construct
var tea = XXTea();

//encrypt the message into a byte array
var encryptedBytes = tea.encrypt(tea.toBytes(message), tea.toBytes(passPhrase));

//convert to a string and base64 encode it
var encryptedString = btoa(tea.byteArrayToString(encryptedBytes));
console.log("encrypted message: " + encryptedString);

//decode the base64 string and convert back from string to a byte array
var encryptedBytes2 = tea.stringToByteArray(atob(encryptedString));

//decrypt
var decryptedBytes = tea.decrypt(encryptedBytes2, tea.toBytes(passPhrase));

//convert the decrypted bytes into a string
var decryptedString = tea.byteArrayToString(decryptedBytes);

console.log("decrypted message: " + decryptedString);

```
