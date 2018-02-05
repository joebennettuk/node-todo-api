const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 3
};

var token = jwt.sign(data, 'secret123');
console.log(token);

var decoded = jwt.verify(token, 'secret123');

console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed!!');
// }
