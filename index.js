const CryptoJS = require("crypto-js");

// Function to encrypt text using Caesar cipher
function encryptText(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            const charCode = char.charCodeAt(0);
            let offset = 65; // 'A' character code
            if (char >= 'a' && char <= 'z') offset = 97; // 'a' character code
            return String.fromCharCode((charCode - offset + shift) % 26 + offset);
        }
        return char;
    }).join('');
}

// Function to decrypt text using Caesar cipher
function decryptText(text, shift) {
    return encryptText(text, 26 - shift);
}

module.exports = {
    encryptText,
    decryptText
};
