let copiar = document.querySelector(".copiar")
copiar.style.display = "none"

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
    const text = document.getElementById("enter-text").value
    const encrypted = encrypt(text)
    copiar.style.display = "block"
    document.getElementById('enter-text').value = ""
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
    let incognitText = document.getElementById("enter-text").value
    const decipher = decrypt(incognitText)
    document.getElementById('enter-text').value = ""
    return document.getElementById('message').textContent = `${decipher}`
}

const message = document.getElementById("message")
const copy = () => {
    navigator.clipboard.writeText(message.textContent)
    message.textContent = "";
    alert('Texto Copiado')
}