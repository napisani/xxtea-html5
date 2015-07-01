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
console.log("PASSED TEST: " + (decryptedString === message));



