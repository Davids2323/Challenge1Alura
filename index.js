const map = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const encrypt = content => {
    let encrypted = content;
    for(let [key, value] of Object.entries(map)){
        encrypted = encrypted.replaceAll(key, value)
    };    
    return encrypted;
};

const encryptHandleClick = () => {
    const text = document.getElementById("enter-text").value;
    const encrypted = encrypt(text)
    return document.getElementById('message').textContent = `${encrypted}`
}

const decrypt = encrypted => {
    let decrypted = encrypted;
    for(let [key, value] of Object.entries(map)){
        decrypted = decrypted.replaceAll(value, key)
    };    
    return decrypted;
};

const decryptHandleClick = () => {
    const incognitText = document.getElementById('message').textContent
    const decipher = decrypt(incognitText)
    return document.getElementById('message').textContent = `${decipher}`
}