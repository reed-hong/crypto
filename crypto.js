const crypto = require('crypto');

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}




// var data = 'Hello, this is a secret message!';
// var key = 'Password!';
// var encrypted = aesEncrypt(data, key);
// var decrypted = aesDecrypt(encrypted, key);


const argv = process.argv
if (argv.length != 5) {
    console.log('en/de content key')
    return
}

var content = argv[3];
var key = argv[4];
var result = ""
if(argv[2]== "en"){
    result = aesEncrypt(content, key);
}else if(argv[2]== "de"){
    result = aesDecrypt(content, key);
}else{
    console.log(argv)
}

console.log(argv)
console.log("result:")
console.log(result)
