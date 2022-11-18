const encryptedMsg = await fetch('https://codember.dev/encrypted.txt').then(r => r.text())
const ASCII_REGEX = /9[7-9]|1[0-1][0-9]|12[0-2]/g

const msg = encryptedMsg.replace(ASCII_REGEX, r => String.fromCharCode(r))

console.log(`submit ${msg}`)
