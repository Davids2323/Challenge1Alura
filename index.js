const map = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const encrypt = text => {
    let encrypted = text;
    for(let [key, value] of Object.entries(map)){
        encrypted = encrypted.replaceAll(key, value)
    };    
    return encrypted;
};

const encrypted = encrypt('text')

console.log(encrypted)

const decrypt = encrypted => {
    let decrypted = encrypted;
    for(let [key, value] of Object.entries(map)){
        decrypted = decrypted.replaceAll(value, key)
    };    
    return decrypted;
};

console.log(decrypt(encrypted))